import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import CardComponent from "../components/CardComponent";
import Container from "react-bootstrap/Container";

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://13.214.37.101:8080/products",
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
    navigate(`/detailpage/${item.id}`, {
      state: {
        id: item.id,
        name: item.name,
        description: item.detail,
        photo: item.url,
        stock: item.stock,
        category: item.category,
        price: item.price,
        userid: item.userid,
      },
    });
  };

  return (
    <>
      <Container>
        <div className="row d-flex justify-content-around">
          {datas.map((item, index) => {
            return (
              <div className="col-12 col-sm-4 col-xl-3" key={index}>
                <CardComponent detail={() => handleDetailPage(item)} name={item.name} photo={item.url} category={item.category} price={item.price} />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default ProductPage;
