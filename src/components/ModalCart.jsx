import React, { useState } from "react"
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const ModalCart = ({ edit, show, handleClose, handleShow, alamat, handleOrder, inputData }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Address
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => handleOrder(e)}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nama Penerima"
                            className="mb-3"
                        >
                            <Form.Control
                                name="receiver"
                                value={alamat.receiver}
                                onChange={(e) => inputData(e)}
                                type="text"
                                placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nomor Telepon"
                            className="mb-3"
                        >
                            <Form.Control
                                name="phone"
                                value={alamat.phone}
                                onChange={(e) => inputData(e)}
                                type="number"
                                placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Alamat Penerima"
                            className="mb-3"
                        >
                            <Form.Control
                                name="address"
                                value={alamat.address}
                                onChange={(e) => inputData(e)}
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                        <Button type="submit" className="float-end">Pembayaran</Button>
                        <Button className="float-end me-2" variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalCart