import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import CardComponent from "../components/CardComponent";
import Container from "react-bootstrap/Container";

const HomePage = () => {
  const navigate = useNavigate();
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
      <Jumbotron />
      <div>
        <h1 className="display-6 fw-bolder text-center my-3 py-3">Products</h1>
      </div>
      <Container>
        <div className="row d-flex justify-content-around">
          {datas.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <CardComponent detail={() => handleDetailPage(item)} name={item.name} photo={item.url} description={item.detail} price={item.price} category={item.category}/>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default HomePage;
