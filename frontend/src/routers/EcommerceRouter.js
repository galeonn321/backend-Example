import { Routes, Route } from "react-router-dom";
import { CartPage } from "../components/cartPage/CartPage";
import { DescriptionScreen } from "../components/Description/DescriptionScreen";
import { HomeScreen } from "../components/HomePage/HomeScreen";
import { NavBar } from "../components/ui/NavBar";

export const EcommerceRouter = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="description/id" element={<DescriptionScreen />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>    
    </>
  );
};
