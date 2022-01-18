import React from "react";
import { CartTable } from "../../component/CartTable/CartTable";
import "./styles.css";
import { TotalAmountTable } from "../../component/TotalAmountTable/TotalAmountTable";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import bestSellerProducts from "../../data/bestSellerProducts";
import { useSelector } from "react-redux";

export const Cart = () => {
  const data = useSelector((state) => {
    return state.cart.products;
  });
  console.log("data", data);
  return (
    <div>
      <div className="header">
        <h2>Cart</h2>
      </div>
      <CartTable />
      {data.length > 0 ? (
        <div className="totalAmountSection">
          <div>
            <h1>Cart Total</h1>
            <TotalAmountTable />
            <Link to="/checkout">
              <Button variant="contained">Proceed To Checkout</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="shopLink">
          <Link to="/shop">
            <Button variant="contained">Return to Shop</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
