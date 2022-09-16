import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function FormProfile({ id, name, email, handleEdit, inputData }) {
  return (
    <>
      <Container>
        <div className="mt-3 ms-2">
          <h3> My Profile</h3>
          <p> Manage your profile information</p>
        </div>
        <div>
          <Form onSubmit={(e) => handleEdit(e)}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: "20px" }}>
                <i className="fa fa-id-badge"></i> ID
              </Form.Label>
              <Form.Control disabled required name="email" className="rounded-pill" style={{ height: "50px" }} type="text" placeholder="ID" value={id || ""} aria-describedby="basic-addon1" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: "20px" }}>
                <i className="fa fa-paperclip"></i> Name
              </Form.Label>
              <Form.Control required name="name" className="rounded-pill" style={{ height: "50px" }} type="text" placeholder="Name" value={name || ""} aria-describedby="basic-addon1" onChange={(e) => inputData(e)} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: "20px" }}>
                <i className="fa fa-envelope"></i> Email
              </Form.Label>
              <Form.Control disabled required name="email" className="rounded-pill" type="text" placeholder="Email" value={email || ""} style={{ height: "50px" }} />
            </Form.Group>
            <Button variant="success" className="mt-2 ms-2" type="submit">
              <i className="fa fa-wrench me-1"></i> Update
            </Button>{" "}
            <br />
            <br />
          </Form>
        </div>
      </Container>
    </>
  );
}

export default FormProfile;
