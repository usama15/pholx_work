import React from 'react'
import "./styles.css"

export const TotalAmountTable = () => {
    return (
        <div>
            <table className="totalAmountTable">
                <tr>
                    <th>Subtotal</th>
                    <td>$17000</td>
                </tr>
                <tr>
                    <th>Shipping</th>
                    <td>Flat Rate: <b>$1000</b><br />Shipping To <b>Pakistan</b><br /><a href="#" className="removeUnderline">Change Address</a></td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td>$18000</td>
                </tr>
            </table>
        </div>
    )
}
