import React from 'react'
import { CartTable } from '../../component/CartTable/CartTable'

export const Cart = () => {
    return (
        <div>
            <div className="header">
                <h2>Cart</h2>
            </div>
            <CartTable />
        </div>
    )
}
