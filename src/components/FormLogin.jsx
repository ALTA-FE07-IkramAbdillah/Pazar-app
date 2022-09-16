// Import Library
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FormLogin = ({ user, userLogin, login, setLogin, handleRegister, inputRegister, handleLogin, inputLogin }) => {
  const spanStyle = {
    color: "blue",
    cursor: "pointer",
    marginLeft: "5px",
  };

  const buttonStyle = {
    width: "106px",
  };

  return (
    console.log(login),
    (
      <>
        <Row>
          {login ? <h1 className="text-center">LOGIN</h1> : <h1 className="text-center">REGISTER</h1>}
          {login ? (
            // Login
            <Col xl={8} className="mx-auto">
              <Form onSubmit={(e) => handleLogin(e)}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: "20px" }}>
                    <i className="fa fa-envelope"></i> Email
                  </Form.Label>
                  <Form.Control required name="email" value={userLogin.email} onChange={inputLogin} className="rounded-pill" style={{ height: "50px" }} type="text" placeholder="Email" aria-describedby="basic-addon1" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label style={{ fontSize: "20px" }}>
                    <i className="fa fa-lock"></i> Password
                  </Form.Label>
                  <Form.Control required name="password" value={userLogin.password} onChange={inputLogin} className="rounded-pill" type="password" placeholder="Password" style={{ height: "50px" }} />
                </Form.Group>
                <Form.Group className="mb-2 ms-2" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me?" />
                </Form.Group>
                <Button variant="dark" style={buttonStyle} className="mt-2 ms-2" type="submit">
                  <i className="fa fa-sign-in me-1"></i> Login
                </Button>{" "}
                <br />
                <br />
                <p className="ms-2 mb-5">
                  New account?
                  <span style={spanStyle} onClick={() => setLogin((prev) => !prev)}>
                    Register here
                  </span>
                </p>
              </Form>
            </Col>
          ) : (
            // Register
            <Col xl={8} className="mx-auto">
              <Form onSubmit={(e) => handleRegister(e)}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: "20px" }}>
                    <i className="fa fa-user"></i> Username
                  </Form.Label>
                  <Form.Control required name="name" value={user.name} onChange={(e) => inputRegister(e)} className="rounded-pill" style={{ height: "50px" }} type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label style={{ fontSize: "20px" }}>
                    <i className="fa fa-envelope"></i> Email
                  </Form.Label>
                  <Form.Control required name="email" value={user.email} onChange={(e) => inputRegister(e)} className="rounded-pill" style={{ height: "50px" }} type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label style={{ fontSize: "20px" }}>
                    <i className="fa fa-lock"></i> Password
                  </Form.Label>
                  <Form.Control required name="password" value={user.password} onChange={(e) => inputRegister(e)} className="rounded-pill" style={{ height: "50px" }} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="dark" style={buttonStyle} className="mt-2 ms-2" type="submit">
                  <i className="fa fa-user-plus"></i> Register
                </Button>{" "}
                <br />
                <br />
                <p className="ms-2">
                  Already have account?
                  <span style={spanStyle} onClick={() => setLogin((prev) => !prev)}>
                    Login here
                  </span>
                </p>
              </Form>
            </Col>
          )}
        </Row>
      </>
    )
  );
};

export default FormLogin;
