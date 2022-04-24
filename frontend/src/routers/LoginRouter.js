import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { LoginScreen } from "../components/Login/LoginScreen";
import { EcommerceRouter } from "./EcommerceRouter";

export const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home/*" element={<EcommerceRouter />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};
