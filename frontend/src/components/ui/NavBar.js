import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Navbar, NavbarText } from "reactstrap";

export const NavBar = () => {
  const navigate = useNavigate();

  //   const handleLogout = () => {
  //     navigate("/login", {
  //       replace: true,
  //     });
  //   };

  return (
    <Navbar color="dark" container dark expand="md" fixed="top">
      <Nav className="me-auto" navbar>
      </Nav>
      <NavbarText>
        <Link to="cart" className="m-5">
          <AiOutlineShoppingCart
            onClick={() => navigate(`/home/cart`)}
            size="2rem"
          ></AiOutlineShoppingCart>
        </Link>
      </NavbarText>
      <NavbarText className="text-white fs-4">
        <Link to="/" className="text-decoration-none">
          Logout
        </Link>
      </NavbarText>
    </Navbar>
  );
};
