import React from "react";
import bestSellerProducts from "../../data/bestSellerProducts";
import "./styles.css";
import { useSelector } from "react-redux";
import { removeFromCart, updateCart } from "../../Store/Reducers/AddToCart";
import { useDispatch } from "react-redux";

export const CartTable = () => {
  const data = useSelector((state) => {
    return state.cart.products;
  });
  const dispatch = useDispatch();
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
        {data.length > 0 ? (
          data.map(({ name, rate,bookedQuantity,changedPrice,ProductID }) => (
            <tr>
              <td style={{ color: "red", cursor: "pointer" }} id="removeBtn" onClick={() => dispatch(removeFromCart(ProductID))}>
                X
              </td>
              <td data-label="Name:">{name}</td>
              <td data-label="Price:">{rate}</td>
              <td data-label="Quantity:">
                <input type="number" value={bookedQuantity} style={{ width: "50px" }} onChange={(e) => dispatch(updateCart({id:ProductID,quantity: e.target.value}))}/>
              </td>
              <td data-label="Subtotal:">{changedPrice}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" id="noProducts">
              No products added to cart
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
