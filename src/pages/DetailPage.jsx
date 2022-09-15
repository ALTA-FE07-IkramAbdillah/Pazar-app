import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Button, ButtonGroup, Form } from "react-bootstrap";
import axios from "axios"
import { useLoginContext } from "../context"

const DetailPage = () => {
  const location = useLocation();
  const [data, setData] = useState(null)
  const { handleCart } = useLoginContext()
  const [max, setMax] = useState(false)
  const [min, setMin] = useState(false)

  const getApi = () => {
    axios.get(`http://13.214.37.101:8080/products/${location.state.id}`)
      .then((res) => setData(res.data.data))
  }
  useEffect(() => {
    getApi()
  }, [])


  // Handle Total Product
  // const [total, setTotal] = useState(1)
  // const handleTotal = (aksi) => {
  //   const STOCK = location.state.stock
  //   if (aksi === "tambah") {
  //     if (total >= STOCK) {
  //       alert("Stock mencapai maksimal")
  //       setMax(true)
  //     } else {
  //       setTotal(total + 1)
  //       setMin(false)
  //     }
  //   } else {
  //     if (total < 2) {
  //       alert("Order minimum 1")
  //       setMin(true)
  //     }
  //     else {
  //       setTotal(total - 1)
  //       setMax(false)
  //     }
  //   }
  // }

  // Handle Order
  const [order, setOrder] = useState({
    product_id: location.state.id,
    quantity: 0
  })
  const inputTotal = (e) => {
    let STOCK = location.state.stock
    if (e.target.value > STOCK) {
      order.quantity = STOCK
      alert(`Maksimum ${STOCK} stock `)
    } else if (e.target.value < 0) {
      alert("Minimum 1 item")
    } else {
      let newOrder = { ...order }
      newOrder[e.target.name] = e.target.value
      setOrder(newOrder)
    }
  }
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    var data = JSON.stringify({
      "product_id": location.state.id,
      "quantity" : parseInt(order.quantity)
    });

    axios.post("http://13.214.37.101:8080/carts", data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        getApi()
        alert("Success add to cart")
      })
      .catch(err => alert(err.response.data)
      )

  }

  return (
    <>
      <Container className="my-5">
        <Row>
          <div className="col-md-6">
            <img src={location.state.photo} alt={location.state.photo} height="400px" width="400px" />
          </div>

          <div className="col-md-6">
            <h1 className="display-5">{location.state.name}</h1>
            <h3 className="display-6 fw-bold my-4">IDR {location.state.price}</h3>
            <h4 className="text-uppercase text-black-50">{location.state.category}</h4>
            <h5 className="text-uppercase text-black-50 ">Stock :{location.state.stock}</h5>
            <p className="lead">{location.state.description}</p>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <ButtonGroup aria-label="Basic example">
                {/* <Button disabled={min && true} variant="dark" onClick={() => handleTotal("kurang")}>-</Button> */}
                <Form.Control
                  name="quantity"
                  value={order.quantity}
                  onChange={(e) => inputTotal(e)}
                  type="number"
                // style={{ width: 45, textAlign: "center" }}
                />
                {/* <Button disabled={max && true} variant="dark" onClick={() => handleTotal("tambah")}>+</Button> */}
              </ButtonGroup> <br /> <br />
              <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-outline-dark px-3 py-2">
                Add to Cart
              </button>
              <NavLink to="/cart" className="btn btn-dark ms-4 px-3 py-2">
                Go to Cart
              </NavLink>
            </Form>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default DetailPage;
