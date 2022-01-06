import { Button } from "@material-ui/core";
import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const ProductCard = ({product,addProdFunc,viewDetailsFunc}) => {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "300px" }}>
      <Card.Img
        variant="top"
        src={product.image}
        width="100%"
        height="212"
        // onClick={() => console.log(product.image)}
        onClick={() => viewDetailsFunc(product)}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Title style={{ fontWeight: "bold" }}>{product.price}</Card.Title>
        <Button
          variant="contained"
          className="addBtn"
          onClick={() => dispatch(addProdFunc(product))}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};
