import React, { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export const DescriptionCardById = ({ id, image1, image2 }) => {

  const [products, setProducts] = useState([id, image1, image2]);


  useEffect(() => {
    getProducts()
      .then((response) => {
        console.log(response)
        return response;
      })
      .then((product) => {
        setProducts(product);
        console.log(product)
      });
  }, []);



  return (
    <></>
  )
};
