import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useCookies } from "react-cookie";
import ModalProduct from "../components/ModalProduct";

const MyProductPage = () => {
  // Modal Product
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setEdit(false);
  };
  const handleShow = () => setShow(true);
  // dont distract

  // Initiate State
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState({
    name: "",
    detail: "",
    stock: "",
    price: "",
    category: "",
    url: "",
  });

  const getApi = () => {
    axios.get("http://13.214.37.101:8080/products").then((res) => setList(res.data.data));
  };
  useEffect(() => {
    getApi();
  }, []);

  const [cookies] = useCookies();
  // Add Product
  const handleAdd = (e) => {
    e.preventDefault();

    var data = JSON.stringify({
      name: add.name,
      detail: add.detail,
      stock: parseInt(add.stock),
      price: parseInt(add.price),
      url: add.url,
      category: add.category,
    });

    if (edit) {
      axios
        .put(`http://13.214.37.101:8080/products/${add.id}`, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          getApi();
          setEdit(false);
          alert("Success Edit product");
          handleClose();
        })
        .catch((err) => alert(err.response.data));
    } else {
      axios
        .post("http://13.214.37.101:8080/products", data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          getApi();
          alert("Success add product");
          handleClose();
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

  // Edit Product
  const handleEdit = (id) => {
    axios.get(`http://13.214.37.101:8080/products/${id}`).then((res) => {
      setAdd(res.data.data);
      setEdit(true);
      setShow(true);
    });
  };

  // Delete Product
  const handleDelete = (id) => {
    axios
      .delete(`http://13.214.37.101:8080/products/${id}`)
      .then(() => {
        getApi();
        alert("Product Terhapus");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <Container>
      <h1 className="text-center my-3">My Product</h1>
      <Button className="float-end" variant="dark" onClick={handleShow}>
        + Product
      </Button>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Gambar</th>
            <th>Nama Produk</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((obj, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <img src={obj.url} alt="kaos" width={60} height={60} />
                </td>
                <td className="pt-4">{obj.name}</td>
                <td className="pt-4">{obj.stock}</td>
                <td className="text-center w-25 pt-3">
                  <Button onClick={() => handleEdit(obj.id)} variant="outline-dark" className="me-2">
                    <i className="fa fa-pencil"></i> Edit
                  </Button>
                  <Button onClick={() => handleDelete(obj.id)} variant="outline-danger">
                    <i className="fa fa-trash"></i> Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <ModalProduct
        // StateModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        edit={edit}
        add={add}
        handleAdd={handleAdd}
        inputData={inputData}
      />
    </Container>
  );
};

export default MyProductPage;
