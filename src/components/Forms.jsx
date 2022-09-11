// Import Library
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Forms = () => {

    const [login, setLogin] = useState(true)

    const spanStyle = {
        color: "blue",
        cursor: "pointer",
        marginLeft: "5px"
    }

    const buttonStyle = {
        width: "100px"
    }

    return (
        console.log(login),
        <>
            <Row>
                {login ? <h1 className="text-center">LOGIN</h1> :
                    <h1 className="text-center">REGISTER</h1>
                }
                {login ?
                    // Login
                    <Col xl={8} className="mx-auto">
                        <Form>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label style={{ fontSize: "20px" }}>
                                    <i class="fa fa-user"></i> Username
                                </Form.Label>
                                <Form.Control
                                    className="rounded-pill"
                                    style={{ height: "50px" }}
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label style={{ fontSize: "20px" }}>
                                    <i className="fa fa-lock"></i> Password
                                </Form.Label>
                                <Form.Control
                                    className="rounded-pill"
                                    type="password"
                                    placeholder="Password"
                                    style={{ height: "50px" }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-2 ms-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me?" />
                            </Form.Group>

                            <Button variant="dark" style={buttonStyle} className="mt-2 ms-2" type="submit">
                                Login
                            </Button> <br /><br />

                            <p className="ms-2 mb-5">New account?
                                <span style={spanStyle} onClick={() => setLogin((prev) => !prev)}>
                                    Register here
                                </span>
                            </p>
                        </Form>
                    </Col> :

                    // Register
                    <Col xl={8} className="mx-auto">
                        <Form>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label style={{ fontSize: "20px" }}>
                                    <i class="fa fa-user"></i> Username
                                </Form.Label>
                                <Form.Control
                                    className="rounded-pill"
                                    style={{ height: "50px" }}
                                    type="text"
                                    placeholder="Username"
                                />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label style={{ fontSize: "20px" }}>
                                    <i class="fa fa-envelope"></i> Email
                                </Form.Label>
                                <Form.Control
                                    className="rounded-pill"
                                    style={{ height: "50px" }}
                                    type="text"
                                    placeholder="Email"
                                />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label style={{ fontSize: "20px" }}>
                                    <i class="fa fa-lock"></i> Password
                                </Form.Label>
                                <Form.Control
                                    className="rounded-pill"
                                    style={{ height: "50px" }}
                                    type="text"
                                    placeholder="Password"
                                />
                            </Form.Group>

                            <Button variant="dark" style={buttonStyle} className="mt-2 ms-2" type="submit">
                                Register
                            </Button> <br /><br />

                            <p className="ms-2">Already have account?
                                <span style={spanStyle} onClick={() => setLogin((prev) => !prev)}>
                                    Login here
                                </span>
                            </p>
                        </Form>
                    </Col>
                }
            </Row>
        </>
    )
}

export default Forms