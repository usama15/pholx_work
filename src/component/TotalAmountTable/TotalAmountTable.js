import React from 'react'
import "./styles.css"
import bestSellerProducts from "../../data/bestSellerProducts"

export const TotalAmountTable = () => {
    return (
        <div>
            <table className="totalAmountTable">
                <tr>
                    <th>Subtotal</th>
                    <td>{Object.entries(bestSellerProducts).length > 0 ? "$17000": "$0"}</td>
                </tr>
                <tr>
                    <th>Shipping</th>
                    <td>Flat Rate: <b>$1000</b><br />Shipping To <b>Pakistan</b><br /><a href="#" className="removeUnderline">Change Address</a></td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td>{Object.entries(bestSellerProducts).length > 0 ? "$18000": "$0"}</td>
                </tr>
            </table>
        </div>
    )
}
