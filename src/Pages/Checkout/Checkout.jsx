import React, { useState } from 'react'
import { Button, Checkbox, TextField } from '@material-ui/core'
import "./styles.css"
import { BillingForm } from '../../component/BillingForm/BillingForm'
import { ShippingForm } from '../../component/ShippingForm/ShippingForm'
import bestSellerProducts from "../../data/bestSellerProducts"
import { useSelector } from 'react-redux'
import {doc,setDoc} from "firebase/firestore"
import db from "../../database/firebase"

export const Checkout = () => {
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const data = useSelector((state) => state.cart);
    const [billingDetails,setBillingDetails] = useState({
        firstName: "",
        lastName: "",
        compName: "",
        address: "",
        city: "",
        postalCode: "",
        phone: "",
        email: "",
        notes: ""
    });
    const [shippingDetails,setShippingDetails] = useState({
        firstName: "",
        lastName: "",
        compName: "",
        address: "",
        city: "",
        postalCode: "",
    });
    const submitForm = async (e) => {
        e.preventDefault();
        if (!checkboxChecked) {
           if ((billingDetails["firstName"] != "") && (billingDetails["lastName"] != "") && (billingDetails["address"] != "") && (billingDetails["city"] != "") && (billingDetails["postalCode"] != "") && (billingDetails["phone"] != "") && (billingDetails["email"] != "")) {
                const id = Math.floor((Math.random())*10000);
                await setDoc(doc(db,"orders",`${id}`), {
                    id: `${id}`,
                    billingDetails: billingDetails,
                    shippingDetails: shippingDetails,
                    order: data.products,
                    total: data.total+1000
                }).then(() => console.log("Order Placed"));
           }
        }
    }
    return (
        <div className="checkout">
            <div className="header">
                <h2>Checkout</h2>
            </div>
            <div className="checkoutSection">
                <div className="leftSideOfCheckoutSection">
                    <h3>Billing Details</h3>
                    <BillingForm
                        setBillingDetails={setBillingDetails} billingDetails={billingDetails} 
                    />
                </div>
                <div className="rightSideOfCheckoutSection">
                    <div style={{ "display": "flex" }}>
                        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} onClick={(e) => setCheckboxChecked(e.target.checked)} />
                        <h3>Shipping To A Different Address</h3>
                    </div>
                    {checkboxChecked ? <ShippingForm differentAddressForm={false} setShippingDetails={setShippingDetails}
                    shippingDetails={shippingDetails} setBillingDetails={(obj) => console.log(obj)} billingDetails={billingDetails}/> : null}
                    <div className="singleInput">
                        <TextField
                            id="standard-multiline-static"
                            label="Order notes"
                            multiline
                            rows={4}
                            value = {billingDetails["notes"]}
                            onChange={(e) => setBillingDetails({
                                ...billingDetails,
                                notes: e.target.value,
                            })}
                        />
                    </div>
                </div>
            </div>
            <div className="orderSection">
                <h3>Your order</h3>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Subtotal</th>
                    </tr>
                    {data.products.map((product) => (
                        <tr>
                            <td>{product.name} x {product.bookedQuantity}</td>
                            <td>{product.changedPrice}</td>
                        </tr>
                    ))}
                    <tr>
                        <th>Subtotal</th>
                        <td><b>{data.total}</b></td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td><b>Flat Rate:- $1000</b></td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td><b>{data.total + 1000}</b></td>
                    </tr>
                </table>
                <div className="placeOrder">
                    <Button variant="contained" onClick={(e) => submitForm(e)}>Place Order</Button>
                </div>
            </div>
        </div>
    )
}