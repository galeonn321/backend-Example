// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  CardImg,
  CardSubtitle,
  CardText,
} from "reactstrap";

export const ProductCard = ({ name, image1, price, id, quantity }) => {
  const navigate = useNavigate();

  return (
    <Card className="border-2 bg-light mb-2 shadow-lg rounded">
      <CardImg
        src={image1}
        alt={name}
        width="100%"
        top
        onClick={() => {
          navigate(`/description/${id}`);
        }}
      />
      <CardBody>
        <CardTitle tag="h5">{name.slice(0, 30)}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {price} €
        </CardSubtitle>
        <CardText className="text-danger">
          Only {quantity} left in stock
          <strong>(more units on the way).</strong>
        </CardText>
        <Button color="primary">Insta-buy</Button>
        <Button color="dark" className="mx-3">
          add to Cart
        </Button>
      </CardBody>
    </Card>
  );
};
