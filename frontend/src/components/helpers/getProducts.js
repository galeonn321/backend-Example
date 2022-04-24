export const getProducts = async () => {
  const url = `http://localhost:9000/api/products`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const products = data.map((product) => {

    return {
      id: product._id,
      name: product.name,
      image1: product.image1,
      image2: product.image2,
      price: product.price,
      quantity: product.quantity,
    };
  });
  
  return products;
};
