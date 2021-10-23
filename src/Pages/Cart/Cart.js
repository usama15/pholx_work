import React from 'react'
import { CartTable } from '../../component/CartTable/CartTable'
import "./styles.css"
import { TotalAmountTable } from '../../component/TotalAmountTable/TotalAmountTable'
import Button from "@material-ui/core/Button";

export const Cart = () => {
    return (
        <div>
            <div className="header">
                <h2>Cart</h2>
            </div>
            <CartTable />
            <div className="totalAmountSection">
                <div>
                    <h1>Cart Total</h1>
                    <TotalAmountTable />
                    <Button variant="contained">Proceed To Checkout</Button>
                </div>
            </div>
        </div>
    )
}
