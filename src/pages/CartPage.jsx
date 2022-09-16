import axios from "axios"
import React, { useEffect, useState } from "react"
import { Table, Button, FloatingLabel, Form } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import ModalCart from "../components/ModalCart"
import { useLoginContext } from "../context"

const CartPage = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const { cart } = useLoginContext()

    const [list, setList] = useState([])
    const [edit, setEdit] = useState(false)
    const [total, setTotal] = useState("")
    const [temp, setTemp] = useState("")

    // Modal Product
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setEdit(false);
    };
    const handleShow = () => setShow(true);
    // dont distract

    // get api
    const getApi = () => {
        axios.get("http://13.214.37.101:8080/carts")
            .then((res) => setList(res.data.data))
    }
    useEffect(() => {
        getApi()
    }, [])

    // delete cart
    const handleDelete = (id) => {
        axios.delete(`http://13.214.37.101:8080/carts/${id}`)
            .then(() => getApi())
    }

    // edit cart
    const handleEdit = ({ id, quantity }) => {
        setEdit(prev => !prev)
        setTemp(id)
        setTotal(quantity)
    }

    // input edit
    const handleInput = (e) => {
        setTotal(e.target.value)
    }

    // submit edit
    const handleSubmit = ({ id }, e) => {
        e.preventDefault()
        var data = JSON.stringify({
            "quantity": parseInt(total)
        });

        axios.put(`http://13.214.37.101:8080/carts/${id}`, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(() => getApi())
            .catch(err => console.log(err.response.data))
        setEdit(prev => !prev)
    }



    const [cartId, setCartId] = useState("")

    const [alamat, setAlamat] = useState({
        receiver: "",
        phone: "",
        address: ""
    })

    // input cartId
    const handleId = (id) => {
        handleShow()
        setCartId(id)
    }

    // input data
    const inputData = (e) => {
        let newAlamat = { ...alamat };
        newAlamat[e.target.name] = e.target.value;
        setAlamat(newAlamat);
    }

    // Go to order
    const handleOrder = (e) => {
        e.preventDefault()
        var axios = require('axios');
        var data = JSON.stringify({
            "cartid": [
                parseInt(cartId)
            ],
            "address": {
                "receiver": alamat.receiver,
                "phone": alamat.phone,
                "address": alamat.address
            }
        });

        console.log(data)

        var config = {
            method: 'post',
            url: 'http://13.214.37.101:8080/orders',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                navigate("/order")
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error.response.data);
            });

    }

    return (
        <>
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>Gambar</th>
                        <th>Nama Produk</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((obj, idx) => {
                        return (
                            <tr key={idx}>
                                <td className="w-25">
                                    <img src={obj.image} alt={obj.product_name} width={100} height={100} />
                                </td>
                                <td className="">
                                    <h2>{obj.product_name}</h2>
                                    {edit && temp === obj.id ?
                                        (
                                            <Form onSubmit={(e) => handleSubmit(obj, e)}>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Quantity Product"
                                                    className="mb-3 w-25 mx-auto">
                                                    <Form.Control
                                                        type="text"
                                                        value={total}
                                                        onChange={(e) => handleInput(e)}
                                                    />
                                                </FloatingLabel>
                                                <Button type="submit">Submit</Button>
                                            </Form>
                                        ) :
                                        (<p>Quantity : {obj.quantity}</p>)}
                                    <h5>IDR.{obj.price * obj.quantity}</h5>
                                    <Button className="me-1" variant="dark" onClick={() => handleId(obj.id)}>Order</Button>
                                    <Button className="me-1" variant="outline-dark" onClick={() => handleDelete(obj.id)}>Cancel Order</Button>
                                    <Button variant="outline-dark" onClick={() => handleEdit(obj)}>Edit</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <ModalCart
                // StateModal
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                alamat={alamat}
                inputData={inputData}
                handleOrder={handleOrder}
            />
        </>
    )
}

export default CartPage