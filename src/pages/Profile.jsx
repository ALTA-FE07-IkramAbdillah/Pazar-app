import React from "react";
import { Col, Container, Modal, NavLink, Row } from "react-bootstrap";
import "../App.css";

const Profile = () => {
  return (
    <>
      <Container>
        <Row className="m-5">
          <Col>
            <h6 className="fs-5">userName</h6>
            <i className="fa fa-reguler fa-user fa-4x"></i>
            <a className="text-decoration-none" href="#">
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
            <Row className="px-2 py-3">
              <h6>My profile</h6>
              <h6>
                <i className="fa fa-light fa-user"></i>
                <a className="text-decoration-none" href="#">
                  Address
                </a>
              </h6>
            </Row>
            <Row className="px-2 py-3">
              <h6>
                <i class="fa-solid fa-list-radio"></i>
                My order
              </h6>
            </Row>
            {/* <Modal.Dialog className="px-2 py-3"> */}
            <Modal.Body>
              <h6 className="text-danger">
                <i class="fa fa-user-xmark"></i>
                Delete Account
              </h6>
            </Modal.Body>
            {/* </Modal.Dialog> */}
          </Col>

          <Col xs={4}>
            <h6 className="text-secondary">Username</h6>

            <form>
              <label>
                <h6>
                  Nama
                  <input type="text" nama="nama" />
                </h6>
              </label>
            </form>
            <h6 className="text-secondary">Email</h6>
            <h6 className="text-secondary">Nomor Telepon</h6>
          </Col>

          <Col xs={4}>
            <div className="vl">
              <div className="me-4">
                <i class="fa fa-user fa-5x"></i>
              </div>
              <NavLink to="/" className="btn btn-outline-white border-dark">
                <i className="fa fa-image"></i> Browse Image
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
