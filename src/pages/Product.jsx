import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card1 from "../components/Card";
import Container from "react-bootstrap/Container";

const Product = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://virtserver.swaggerhub.com/iffakhry/ecommerce/1.0.0/products",
      headers: {
        "Content-Type": "application/json",
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

  const handleDetailPage = (item) => {
    navigate(`/detail/${item.id}`, {
      state: {
        id: item.id,
        name: item.name,
        description: item.detail,
        photo: item.photo,
        url: item.url,
        stock: item.stock,
        price: item.price,
        userid: item.userid,
      },
    });
  };

  return (
    <>
      <div>
        <h1 className="display-6 fw-bolder text-center my-3 py-3">Products</h1>
      </div>
      <Container>
        <div className="row d-flex justify-content-around">
          {datas.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <Card1 detail={() => handleDetailPage(item)} name={item.name} photo={item.photo} description={item.detail} price={item.price} />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Product;
