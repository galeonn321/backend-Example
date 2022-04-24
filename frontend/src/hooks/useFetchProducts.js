import { getProducts } from "../components/helpers/getProducts";

import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        return response;
      })
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return products;
};
