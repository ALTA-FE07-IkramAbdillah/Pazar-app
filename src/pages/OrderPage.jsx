import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ModalOrder from "../components/ModalOrder";
import { Circles } from "react-loader-spinner";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Toast from "react-bootstrap/Toast";
import axios from "axios";
import { Accordion, Badge, Container } from "react-bootstrap";
function OrderPage() {
  const [validated, setValidated] = useState(false);
  const [list, setList] = useState([]);
  const [detail, setDetail] = useState([]);
  const [tampil, setTampil] = useState(false);
  const [data, setData] = useState(null);
  const [deal, setDeal] = useState(null);
  const [loading, setLoading] = useState(false);

  // Modal Product
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  // dont distract

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  // Get Api
  const getApi = () => {
    axios.get("http://13.214.37.101:8080/orders").then((res) => setList(res.data.data));
  };
  useEffect(() => {
    getApi();
  }, []);

  // Get Detail
  const getDetail = (id) => {
    setTampil(true);
    axios
      .get(`http://13.214.37.101:8080/orders/${id}`)
      .then((res) => setDetail(res.data.data[0]))
      .catch((err) => err.response.data);
  };
  useEffect(() => {
    getDetail();
  }, []);

  // HandlePaid
  const handlePaid = (id) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      axios.post(`http://13.214.37.101:8080/orders/${id}/confirm`).then(() => {
        getApi();
        alert("Payment Successfully :)");
      });
    }, 3000);
  };

  // HandleCanceled
  const handleCancel = (id) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      axios.put(`http://13.214.37.101:8080/orders/${id}/cancel`).then(() => {
        getApi();
        alert("Order Canceled :(");
      });
    }, 3000);
  };

  return (
    <>
      {loading ? (
        <div style={{ width: "10%", marginTop: "600", margin: "auto" }}>
          <Circles height="100" width="100" radius="9" color="green" ariaLabel="three-dots-loading" wrapperStyle wrapperClass />
        </div>
      ) : (
        ""
      )}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Container>
          <Row>
            <h1 className="my-4 text-center">My Order</h1>
            {list.map((obj, idx) => {
              return (
                <Accordion key={idx} onClick={() => getDetail(obj.ID)} className="w-100">
                  <Accordion.Item eventKey={idx}>
                    <Accordion.Header className="pt-2">
                      <p>
                        Penerima :{" "}
                        <b className="ms-1">
                          {obj.Address.Receiver ? obj.Address.Receiver : "Unknown"} ({obj.Address.Phone})
                        </b>{" "}
                        <br />
                        Alamat : {obj.Address.Address ? obj.Address.Address : "Unknown"}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card>
                        <Card.Img variant="" src="" />
                        <Card.Body>
                          <Card.Title>
                            {tampil ? <h1>{detail.ProductName}</h1> : ""}
                            <h4>IDR.{obj.Price}</h4>
                          </Card.Title>
                          <Row xl={2}>
                            <Col xl={6}>
                              <Card.Text>
                                <Badge bg={(obj.Status === "Unpaid" && "warning") || (obj.Status === "Paid" && "success") || (obj.Status === "Canceled" && "danger")} text="dark">
                                  {obj.Status}
                                </Badge>{" "}
                              </Card.Text>
                            </Col>
                            <Col xl={6}>
                              <Button className="float-end" variant="outline-dark" onClick={() => handleCancel(obj.ID)}>
                                Cancel
                              </Button>
                              <Button className="float-end me-2" variant="dark" onClick={() => handlePaid(obj.ID)}>
                                Checkout
                              </Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              );
            })}
          </Row>
        </Container>
        {/* <ModalDeal
          // StateModal
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
        /> */}
      </Form>
    </>
  );
}

export default OrderPage;
