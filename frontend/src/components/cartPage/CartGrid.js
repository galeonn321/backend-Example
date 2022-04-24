import React from 'react'
import { useFetchCartByUserId } from '../../hooks/useFetchCart'

export const CartGrid = ( {userId} ) => {

  const user = sessionStorage.getItem("user");

  console.log('test', user)
  

  //const cart = useFetchCartByUserId(userId);

  return (
    <div>CartGrid</div>
  )
}
