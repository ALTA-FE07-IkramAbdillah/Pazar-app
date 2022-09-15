import axios from "axios"
import React, { useEffect, useState } from "react"
import { Table, Button, FloatingLabel, Form } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { useLoginContext } from "../context"

const CartPage = () => {

    const location = useLocation()
    const { cart } = useLoginContext()

    const [list, setList] = useState([])
    const [edit, setEdit] = useState(false)
    const [total, setTotal] = useState("")

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
        setEdit(true)
        setTotal(quantity)
    }

    // input edit
    const handleInput = (e) => {
        console.log(e.target.value)
        setTotal(e.target.value)
    }

    // submit edit
    const handleSubmit = ({ id },e) => {
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

    return (
        console.log(cart),
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
                                    {edit ?
                                        (
                                            <Form onSubmit={(e) => handleSubmit(obj,e)}>
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
                                        (<p>{obj.quantity}</p>)}
                                    <h5>IDR.{obj.price}</h5>
                                    <Button>Order</Button>
                                    <Button onClick={() => handleDelete(obj.id)}>Cancel Order</Button>
                                    <Button onClick={() => handleEdit(obj)}>Edit</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default CartPage