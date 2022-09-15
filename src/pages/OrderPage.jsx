
// import { useState,useEffect } from "react";
// import { Row,Col } from "react-bootstrap";
// import StyledCard from "../c"
// import { Link } from 'react-router-dom';

// const cardStyle = {
//   listStyle: "none",
//   margin: 5,
//   paddingLeft: 0,
//   minWidth: 240,
// };

// const Product = () => {
//   const token = "not-the-actual-token";
//   const [result, setResult] = useState([]);

//   useEffect(() => {
//     fetch(
//       "https://virtserver.swaggerhub.com/iffakhry/ecommerce/1.0.0",
//       {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     )
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not OK');
//         }
//         return res.json();
//       })
//       .then((data) => setResult(data.result))
//       .catch(error => {
//         // handle any rejected Promises, errors, etc...
//       });
//   }, []);

//   return (
//     <div className="latestdeals container my-5">
//       <h1>All Products</h1>
//       <Row className="hotcards">
//         <Col className="colcard">
//           {result.map((item) => (
//             <div key={item.productCode} style={cardStyle}>
//               <Link to={`/itemDetail/${item.productCode}/${item.value}/${item.vendor}`}>
//                 <StyledCard
//                   name={item.vendor}
//                   title={item.description}
//                   price={item.value}
//                   item={item}
//                 />
//               </Link>
//             </div>
//           ))}
//         </Col>
//       </Row>
//     </div>
//   );
// // };
// import React from "react"
// const OrderPage = ({ cart, setCart, handleChange }) => {
//     const handleRemove = (productCode) => {
//       setCart(cart => cart.filter(item => item.productCode !== productCode));
//     };
  
//     const price = cart.reduce((total, item) => total + item.amount * item.price, 0);
  
//     return (
//       <article>
//         {cart.map((item) => (
//           <div className="cart_box" key={item.id}>
//             <div>
//               <button onClick={() => handleChange(item.productCode, 1)}>+</button>
//               <button>{item.amount}</button>
//               <button onClick={() => handleChange(item.productCode, -1)}>-</button>
//             </div>
//             <div>
//               <span>{item.price}</span>
//               <button onClick={() => handleRemove(item.productCode)}>Remove</button>
//             </div>
//           </div>
//         ))}
//         <div className="total">
//           <span>Total Price</span>
//           <span>R - {price}</span>
//         </div>
//       </article>
//     );
//   };
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import JordanBrown from "../images/JordanBrown.png"
import JordanBlack from "../images/JordanBlack.png"
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Toast from 'react-bootstrap/Toast';

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
        
        <Toast><Card style={{ width: '50rem' }}>
      <Card.Img variant="" src={JordanBrown} />
      <Card.Body>
      <Card.Title>Shoes Mart</Card.Title>
        <Card.Title><h3>Tsubasa Shoes</h3></Card.Title>
        <Card.Text>
        Nike_Air_Jordan_XIII_13_Retro_Kid_Children_Shoes_Brown
        Style AR4491-025
Colorway LIGHT BROWN
Retail Price $225
Release Date 11/24/2021
        </Card.Text>
        <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">-</Button>
      <Button variant="light">1</Button>
      <Button variant="secondary">+</Button>
    </ButtonGroup>
      </Card.Body>
      
    </Card>
    </Toast>
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={JordanBlack} />
      <Card.Body>
      <Card.Title>Jordan Store</Card.Title>
        <Card.Title><h3>Hyuga Shoes</h3></Card.Title>
        <Card.Text>
          
Style
439358-021

Colorway
BLACK/METALLIC GOLD-WHITE-GUM MEDIUM BROWN

Retail Price
$140

Release Date
02/24/2018
        </Card.Text>
        <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">-</Button>
      <Button variant="light">1</Button>
      <Button variant="secondary">+</Button>
    </ButtonGroup>
      </Card.Body>
    </Card>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Shipping address</Form.Label>
          <DropdownButton variant="secondary" md="4"  id="dropdown-basic-button" title="address">
      <Dropdown.Item href="#/action-1">jakarta</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Bogor</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Bandung</Dropdown.Item>
    </DropdownButton>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>select payment</Form.Label>
          <DropdownButton variant="secondary" md="4"  id="dropdown-basic-button" title="payment">
      <Dropdown.Item href="#/action-1">Gopay</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Shopee</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Bank</Dropdown.Item>
    </DropdownButton>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>choose delivery courier</Form.Label>
          <DropdownButton variant="secondary" md="4"  id="dropdown-basic-button" title="Courier">
      <Dropdown.Item href="#/action-1">JNE</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Si Cepat</Dropdown.Item>
      <Dropdown.Item href="#/action-3">TIKI</Dropdown.Item>
    </DropdownButton>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Are you sure the data you have filled in is correct?"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">I'm sure</Button>
    </Form>
  );
}

export default OrderPage