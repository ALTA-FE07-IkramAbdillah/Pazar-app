import React, { useState } from "react"
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const ModalCart = ({ edit, show, handleClose, handleShow, alamat, handleOrder, inputData }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Detail Order
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalCart