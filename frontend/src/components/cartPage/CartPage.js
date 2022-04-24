import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { CartGrid } from "./CartGrid";

export const CartPage = () => {
  const navigate = useNavigate();
  // const data = [
  //   {
  //     _id: "62438dc8f0e52eb58ceb8298",
  //     userId: "623b54f26f0e18a1624bb012",
  //     products: [
  //       {
  //         _id: "623100cd22702cde138b228b",
  //         name: "SONY WH-1000XM4 WIRELESS",
  //         image1:
  //           "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/406fdd3cc9e49e28002ad8baef9185c8_1200x1200.jpg?v=1638459221",
  //         image2:
  //           "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/8ac91981a5234910dc9876bb8cd47082_1200x1200.jpg?v=1638459221",
  //         price: 299.99,
  //         quantity: 20,
  //         __v: 0,
  //       },
  //       {
  //         _id: "623102595b1f8dc69f9d7afa",
  //         name: "GRADO GW100 V2 WIRELESS OPEN-BACK",
  //         image1:
  //           "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/4E-GW100-2_1200x1200.jpg?v=1603921352",
  //         image2:
  //           "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/4E-GW100-4_1200x1200.jpg?v=1603921371",
  //         price: 90.99,
  //         quantity: 30,
  //         __v: 0,
  //       },
  //     ],
  //     totalPrice: 200,
  //     __v: 0,
  //   },
  // ];

  return (
    <CartGrid />
  );
};
