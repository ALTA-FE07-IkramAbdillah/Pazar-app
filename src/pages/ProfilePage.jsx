import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCookies } from "react-cookie";
import axios from "axios";
import FormProfile from "../components/FormProfile";
import FormLeft from "../components/FormLeft";

function ProfilePage() {
  const [datas, setDatas] = useState([]);
  const [cookies, setCookies] = useCookies();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://13.214.37.101:8080/users/details/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setDatas(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  var config = {
    method: "get",
    url: "http://13.214.37.101:8080/users/details/",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NjMyMzcxNDgsInVzZXJJZCI6Mn0.5wu679BOpQC2QtlIVtjyDn-6265J8Zz7JRz6GMyh6XY",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <Container className="py-3">
        <Row>
          <Col xs={3} className="border border-dark">
            <FormLeft />
          </Col>
          <Col className="border border-dark">
            <FormProfile />
          </Col>
        </Row>
      </Container>
      ;
    </>
  );
}

export default ProfilePage;
