import { useEffect, useState } from "react";
import { getCartByUserId } from "../components/helpers/getCart";

export const useFetchCartByUserId = (userId) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCartByUserId(userId)
      .then((response) => {
        return response;
      })
      .then((cart) => {
        setCart(cart);
      });
  }, []);

  return cart;
};
