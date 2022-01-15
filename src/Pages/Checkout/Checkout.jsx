import React, { useState } from 'react'
import { Button, Checkbox, TextField } from '@material-ui/core'
import "./styles.css"
import { CheckoutForm } from '../../component/CheckoutForm/CheckoutForm'
import bestSellerProducts from "../../data/bestSellerProducts"
import { useSelector } from 'react-redux'

export const Checkout = () => {
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const data = useSelector((state) => state.cart);
    return (
        <div className="checkout">
            <div className="header">
                <h2>Checkout</h2>
            </div>
            <div className="checkoutSection">
                <div className="leftSideOfCheckoutSection">
                    <h3>Billing Details</h3>
                    <CheckoutForm differentAddressForm />
                </div>
                <div className="rightSideOfCheckoutSection">
                    <div style={{ "display": "flex" }}>
                        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} onClick={(e) => setCheckboxChecked(e.target.checked)} />
                        <h3>Shipping To A Different Address</h3>
                    </div>
                    {checkboxChecked ? <CheckoutForm differentAddressForm={false} /> : null}
                    <div className="singleInput">
                        <TextField
                            id="standard-multiline-static"
                            label="Order notes"
                            multiline
                            rows={4}
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
                            <td>{product.name} x 1</td>
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
                    <Button variant="contained">Place Order</Button>
                </div>
            </div>
        </div>
    )
}
