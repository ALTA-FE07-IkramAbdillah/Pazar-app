import React, { useState } from "react"
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const ModalProduct = ({ edit, show, handleClose, handleShow, add, handleAdd, inputData }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {edit ? "Edit Product" : "Add Product"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => handleAdd(e)}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nama Product"
                            className="mb-3"
                        >
                            <Form.Control
                                name="name"
                                value={add.name}
                                onChange={(e) => inputData(e)}
                                type="text"
                                placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Detail Product"
                            className="mb-3"
                        >
                            <Form.Control
                                name="detail"
                                value={add.detail}
                                onChange={(e) => inputData(e)}
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Stock (Number)"
                            className="mb-3"
                        >
                            <Form.Control
                                name="stock"
                                value={add.stock}
                                onChange={(e) => inputData(e)}
                                type="number"
                                placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Price (Number)"
                            className="mb-3"
                        >
                            <Form.Control
                                disabled={edit && true}
                                name="price"
                                value={add.price}
                                onChange={(e) => inputData(e)}
                                type="number"
                                placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Category"
                            className="mb-3"
                        >
                            <Form.Control
                                disabled={edit && true}
                                name="category"
                                value={add.category}
                                onChange={(e) => inputData(e)}
                                type="text"
                                placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Image Url"
                            className="mb-3"
                        >
                            <Form.Control
                                disabled={edit && true}
                                name="url"
                                value={add.url}
                                onChange={(e) => inputData(e)}
                                type="text"
                                placeholder="name@example.com" />
                        </FloatingLabel>
                        <Button type="submit" className="float-end">{edit ? "Edit Product" : "Add Product"}</Button>
                        <Button className="float-end me-2" variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalProduct