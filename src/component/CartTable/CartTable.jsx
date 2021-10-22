import React from 'react'
import bestSellerProducts from "../../data/bestSellerProducts"
import "./styles.css"

export const CartTable = () => {
    return (
        <table className="productsTable">
            <thead>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </thead>
            <tbody>
                {Object.entries(bestSellerProducts).map(([item, { name, price }]) => (
                    <tr>
                        <td style={{ "color": "red","cursor":"pointer"}} id="removeBtn">X</td>
                        <td data-label="Name:">{name}</td>
                        <td data-label="Price:">{price}</td>
                        <td data-label="Quantity:"><input type="number" value="1" style={{ "width":"50px" }} /></td>
                        <td data-label="Subtotal:">{price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
