export const GetAllProducts =  () => {
  const url = "http://localhost:9000/api/products";
  const response = fetch(url);
  const data =  response.json();
  console.log(data)
};
