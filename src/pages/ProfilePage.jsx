import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCookies } from "react-cookie";
import axios from "axios";
import FormProfile from "../components/FormProfile";
import { NavLink } from "react-router-dom";

const ProfilePage = () => {
  const [cookies] = useCookies();
  // Initiate State
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState({
    id: "",
    name: "",
    email: "",
  });

  const getApi = () => {
    axios.get("http://13.214.37.101:8080/users/details/").then((res) => setList(res.data.data));
  };
  useEffect(() => {
    getApi();
  }, []);

  // Add Profile
  const handleAdd = (e) => {
    e.preventDefault();

    var data = JSON.stringify({
      id: parseInt(add.id),
      name: add.name,
      email: add.email,
    });

    if (edit) {
      axios
        .put(`http://13.214.37.101:8080/users/details/${add.id}`, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          getApi();
          setEdit(false);
          alert("Success Edit product");
        })
        .catch((err) => alert(err.response.data));
    } else {
      axios
        .post("http://13.214.37.101:8080/users/details/", data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          getApi();
          alert("Success add product");
        })
        .catch((err) => alert(err.response.data));
    }
  };

  // Input Data
  const inputData = (e) => {
    console.log(e.target.value);
    let newAdd = { ...add };
    newAdd[e.target.name] = e.target.value;
    setAdd(newAdd);
  };

  // Edit Profile
  const handleEdit = (id) => {
    axios.get(`http://13.214.37.101:8080/users/details/${id}`).then((res) => {
      setAdd(res.data.data);
      setEdit(true);
    });
  };

  // Delete Product
  const handleDelete = (id) => {
    axios
      .delete(`http://13.214.37.101:8080/users/${id}`)
      .then(() => {
        getApi();
        alert("Product Terhapus");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <>
      <Container className="py-3">
        <Row>
          <Col xs={3} className="border border-dark">
            <div className="d-flex mt-2">
              <img className="d-flex border border-dark" src="https://cf.shopee.co.id/file/4ea8db682dee4cf9a167b78eabc39c0b" alt="foto" height="150" width="150" />
              <div className="mt-5 ms-2">
                <h5>{list.name}</h5>
                <p>
                  <i className="fa fa-edit me-1"></i>Edit Profile
                </p>
              </div>
            </div>
            <div className="d-flex">
              <button className="btn btn-outline-success mt-3 ms-3 ">
                <i className="fa fa-user"></i>
              </button>
              <h5 className="mt-3 ms-2">Profile</h5>
            </div>
            <div className="d-flex">
              <button className="btn btn-outline-success mt-3 ms-3 ">
                <i className="fa fa-book"></i>
              </button>
              <h5 className="mt-3 ms-2">My Order</h5>
            </div>
            <div className="d-flex">
              <NavLink to="/myproducts" className="btn btn-outline-success mt-3 ms-3 ">
                <i className="fa fa-cart-plus"></i>
              </NavLink>
              <h5 className="mt-3 ms-2">Manage Product</h5>
            </div>
            <div className="d-flex">
              <button className="btn btn-outline-danger mt-3 ms-3 " onClick={() => handleDelete(list.id)}>
                <i className="fa fa-trash"></i>
              </button>
              <h5 className="mt-3 ms-2 text-danger">Delete Account</h5>
            </div>
          </Col>
          <Col className="border border-dark">
            <FormProfile id={list.id} name={list.name} email={list.email} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
