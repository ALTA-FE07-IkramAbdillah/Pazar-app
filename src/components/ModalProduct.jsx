import React, { useState } from "react"
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const ModalProduct = ({ edit, show, handleClose, handleShow, add, handleAdd, inputData }) => {

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

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
                                name="url"
                                value={add.url}
                                onChange={(e) => inputData(e)}
                                type="text"
                                placeholder="name@example.com" />
                        </FloatingLabel>
                        <Button type="submit">SUBMIT DATA</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalProduct