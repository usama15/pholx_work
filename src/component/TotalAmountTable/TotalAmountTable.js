import React from 'react'
import "./styles.css"
import bestSellerProducts from "../../data/bestSellerProducts"
import {useSelector} from "react-redux"

export const TotalAmountTable = () => {
    const total = useSelector((state) => state.cart.total);
    return (
        <div>
            <table className="totalAmountTable">
                <tr>
                    <th>Subtotal</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Shipping</th>
                    <td>Flat Rate: <b>$1000</b><br />Shipping To <b>Pakistan</b><br /><a href="#" className="removeUnderline">Change Address</a></td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td>{total > 0 ? total + 1000: 0}</td>
                </tr>
            </table>
        </div>
    )
}
