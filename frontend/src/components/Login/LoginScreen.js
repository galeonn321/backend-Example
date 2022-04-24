import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Form,
  FormGroup,
  Input,
  Row,
  Button,
  Container,
} from "reactstrap";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import "../../styles/loginScreen.scss";
import { useRef, useState } from "react";
import { loginUser, registerUser } from "../helpers/auth";
import { useNavigate } from "react-router-dom";
// import { signIn } from "../../services/auth.service";
// import { useState, useCallback } from "react";

const initialState = { username: "", password: "", email: "" };

export const LoginScreen = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  //creo una referencia al input username del formulario login, para luego de un registro realizar autofocus
  const inputUsername = useRef(initialState);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const cleanFormRegister = () => {
    setState(initialState);
    inputUsername.current.focus();
  };

  return (
    <Container className="position-absolute top-50 start-50 translate-middle">
      <Form>
        <Row className="shadow-lg bg-body rounded">
          <Col className="p-5 border-end" xs="4">
            <Row>
              <Col md={12}>
                <FormGroup>
                  <h2 className="mb-5 text-center">Login</h2>

                  <div className="d-flex align-items-center justify-content-center mb-4">
                    <FaUserAlt size="1rem" className="m-1" />
                    <Input
                      as="input"
                      name="username"
                      placeholder="username"
                      type="username"
                      onChange={(e) => handleChange(e)}
                      autoFocus
                      ref={inputUsername}
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <div className="d-flex align-items-center justify-content-center">
                    <FaLock size="1rem" className="m-1" />
                    <Input
                      name="password"
                      placeholder="********"
                      type="password"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <Col md={12}>
                    <Button
                      className="m-4"
                      onClick={() => loginUser(state, navigate)}
                    >
                      Sign in
                    </Button>
                  </Col>
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col className="p-5 bg-dark" xs="4">
            <img
              src="./assets/fidelioLogo_white.png"
              alt="logo"
              className="w-100"
            />
            <img
              src="./assets/Audio.png"
              alt="Headphones"
              className="w-100 mt-5"
            />
          </Col>
          <Col className="p-5 border-start justify-content-between" xs="4">
            <Row form className="">
              <Col md={12}>
                <FormGroup>
                  <h2 className="mb-5 text-center">Register</h2>
                  <div className="d-flex align-items-center justify-content-center">
                    <FaUserAlt size="1rem" className="m-1" />
                    <Input
                      id="exampleusername"
                      name="username"
                      placeholder="username"
                      type="username"
                      onChange={(e) => handleChange(e)}
                      value={state.username}
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <div className="d-flex align-items-center justify-content-center">
                    <FaLock size="1rem" className="m-1" />
                    <Input
                      name="password"
                      placeholder="********"
                      type="password"
                      onChange={(e) => handleChange(e)}
                      value={state.password}
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <div className="d-flex align-items-center justify-content-center">
                    <AiTwotoneMail size="1rem" className="m-1" />
                    <Input
                      name="email"
                      placeholder="user@email.com"
                      type="email"
                      onChange={(e) => handleChange(e)}
                      value={state.email}
                    />
                  </div>
                  <Button
                    className="m-4"
                    onClick={() =>
                      registerUser(state, navigate, cleanFormRegister)
                    }
                  >
                    Sign Up!
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
