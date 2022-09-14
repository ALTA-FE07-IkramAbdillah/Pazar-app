import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const DetailPage = () => {
  const location = useLocation();

  return (
    <>
      <Container className="my-5">
        <Row>
          <div className="col-md-6">
            <img src={location.state.photo} alt={location.state.photo} height="400px" width="400px" />
          </div>

          <div className="col-md-6">
            <h1 className="display-5">{location.state.name}</h1>
            <h4 className="text-uppercase text-black-50">{location.state.category}</h4>
            <h3 className="display-6 fw-bold my-4">IDR {location.state.price}</h3>
            <p className="lead">{location.state.description}</p>
            <button className="btn btn-outline-dark px-3 py-2">Add to Cart</button>
            <NavLink to="/cart" className="btn btn-dark ms-4 px-3 py-2">
              Go to Cart
            </NavLink>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default DetailPage;
