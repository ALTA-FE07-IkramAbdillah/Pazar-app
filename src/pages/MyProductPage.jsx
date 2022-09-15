import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Container, Table } from "react-bootstrap"
import { useCookies } from "react-cookie"
import ModalProduct from "../components/ModalProduct"

const MyProductPage = () => {

    // Modal Product
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setEdit(false)
    };
    const handleShow = () => setShow(true);
    // dont distract


    // Initiate State
    const [list, setList] = useState([])
    const [add, setAdd] = useState({
        name: "",
        detail: "",
        stock: "",
        price: "",
        category: "",
        url: ""
    })
    const [edit, setEdit] = useState(false)

    const getApi = () => {
        axios.get("http://13.214.37.101:8080/products")
            .then((res) => setList(res.data.data))
    }
    useEffect(() => {
        getApi()
    }, [])


    const [cookies] = useCookies()
    // Add Product
    const handleAdd = () => {
        axios.post("http://13.214.37.101:8080/products",add)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    // Input Data
    const inputData = (e) => {
        console.log(e.target.value)
        let newAdd = { ...add }
        newAdd[e.target.name] = e.target.value
        setAdd(newAdd)
    }

    // Edit Product
    const handleEdit = () => {
        setShow(true)
        setEdit(true)
    }

    // Delete Product
    const handleDelete = () => {
        alert("Product Terhapus")
    }

    return (
        <Container>
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>Gambar</th>
                        <th>Nama Produk</th>
                        <th>Harga</th>
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
                                <td className="pt-4">{obj.price}</td>
                                <td className="text-center w-25 pt-3">
                                    <Button onClick={handleEdit} variant="outline-dark" className="me-2"><i class="fa fa-pencil"></i> Edit</Button>
                                    <Button onClick={handleDelete} variant="outline-danger"><i class="fa fa-trash"></i> Delete</Button>
                                </td>
                            </tr>
                        )
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
    )
}

export default MyProductPage