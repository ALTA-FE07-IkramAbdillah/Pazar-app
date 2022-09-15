import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Toast from "react-bootstrap/Toast";

function OrderPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Toast>
        <Card style={{ width: "50rem" }}>
          <Card.Img variant="" src="" />
          <Card.Body>
            <Card.Title>Shoes Mart</Card.Title>
            <Card.Title>
              <h3>Tsubasa Shoes</h3>
            </Card.Title>
            <Card.Text>
              <Card.Text>Style AR4491-025 Nike_Air_Jordan_XIII_13_Retro_Kid_Children_Shoes_Brown</Card.Text>
              <Card.Text>Colorway LIGHT BROWN</Card.Text>
              <Card.Text>Release Date 11/24/2021</Card.Text>
              <Card.Text>Retail Price $225</Card.Text>
            </Card.Text>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">-</Button>
              <Button variant="light">1</Button>
              <Button variant="secondary">+</Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Toast>
      <Card style={{ width: "50rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Jordan Store</Card.Title>
          <Card.Title>
            <h3>Hyuga Shoes</h3>
          </Card.Title>
          <Card.Text>
            <Card.Text>Style 439358-021</Card.Text>
            <Card.Text>Colorway BLACK/METALLIC GOLD-WHITE-GUM MEDIUM </Card.Text>
            <Card.Text>Release Date 02/24/2018 </Card.Text>
            <Card.Text>Retail Price $140</Card.Text>
          </Card.Text>

          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">-</Button>
            <Button variant="light">1</Button>
            <Button variant="secondary">+</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <h1 align="right">Total Price : $ 365,-</h1>
      <div>
        <Card border="dark">
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>extra note for courier</Form.Label>
              <Form.Control required type="text" placeholder="type here.." defaultValue="" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>Shipping address</Form.Label>
              <DropdownButton variant="secondary" md="4" id="dropdown-basic-button" title="address">
                <Dropdown.Item href="#/action-1">jakarta</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bogor</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Bandung</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>select payment</Form.Label>
              <DropdownButton variant="secondary" md="4" id="dropdown-basic-button" title="payment">
                <Dropdown.Item href="#/action-1">Gopay</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Shopee</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Bank</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>choose delivery courier</Form.Label>
              <DropdownButton variant="secondary" md="4" id="dropdown-basic-button" title="Courier">
                <Dropdown.Item href="#/action-1">JNE</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Si Cepat</Dropdown.Item>
                <Dropdown.Item href="#/action-3">TIKI</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check required label="Are you sure the data you have filled in is correct?" feedback="You must agree before submitting." feedbackType="invalid" />
          </Form.Group>
          <Button type="submit">I'm sure</Button>
        </Card>
      </div>
    </Form>
  );
}

export default OrderPage;
