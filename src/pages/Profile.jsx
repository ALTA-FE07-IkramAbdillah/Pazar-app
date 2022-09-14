import React from "react";
import { Button, Col, Container, NavLink, Row } from "react-bootstrap";
import "../App.css";

const Profile = () => {
  return (
    <>
      <Container>
        <Row className="m-5">
          <Col>
            <h6 className="fs-5">userName</h6>
            <i className="fa fa-reguler fa-user fa-4x"></i>
            <a className="text-decoration-none mx-2" href="#">
              Edit Profile
            </a>
            <hr />
          </Col>
          <Col xs={8}>
            <h2>My Profile</h2>
            <a className="text-decoration-none" href="#">
              Manage your profile information
            </a>
            <br />
            <br />
            <hr />
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <Row className="mb-4">
              <Col className="text-end">
                <i className="fa fa-light fa-user fa-2x"></i>
              </Col>
              <Col className="text-start">
                <h6 className="">My profile</h6>
                <h6>
                  <a className="text-decoration-none" href="#">
                    Address
                  </a>
                </h6>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col className="text-end">
                <i className="fa fa-user fa-list-radio fa-2x"></i>
              </Col>
              <Col className="text-start">
                <h6>
                  <a className="text-decoration-none text-dark" href="#">
                    My Order
                  </a>
                </h6>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col className="text-end">
                <i className="fa fa-user fa-xmark fa-2x"></i>
              </Col>
              <Col className="text-start">
                <NavLink>
                  <h6>
                    <a className="text-decoration-none text-danger" href="#">
                      Delete Account
                    </a>
                  </h6>
                </NavLink>
              </Col>
            </Row>
          </Col>

          <Col xs={2} className="text-secondary text-end">
            <h6 className="mb-3">Username</h6>
            <form>
              <label>
                <h6 className="mb-4">Nama</h6>
              </label>
            </form>
            <h6 className="mb-3">Email</h6>
            <h6 className="mb-3">Nomor Telepon</h6>
          </Col>

          <Col xs={2} className="text-start">
            <h6 className="mb-3">UserName</h6>
            <form>
              <label>
                <input className="mb-3" type="text" nama="nama" />
              </label>
            </form>
            <h6 className="mb-3">email</h6>
            <h6 className="mb-3">nomorTelp</h6>
          </Col>

          <Col xs={4}>
            <div className="vl">
              <div className="m-3">
                <i class="fa fa-user fa-5x"></i>
              </div>
              <Button
                to="/"
                variant="light"
                className="btn btn-outline-white border-dark mx-3"
              >
                <i className="fa fa-image"></i> Browse Image
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
