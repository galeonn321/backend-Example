export const getCartByUserId = async (userId, navigate) => {
  const url = `http://localhost:9000/api/cart/${userId}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(data)

  data.ok && navigate("/home/cart");

//   const cart = data.map((cart) => {
//       return{
//           id: cart._id,
//           userId: cart.userId,
//           products: cart.products,
//           totalPrice: cart.totalPrice
//       }
//   })
//   return cart;
};
