/**
 * a function component which lays all the components that treat the order finishing
 */


import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';


export default function FinishOrder(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button id = "finish-order" className="btn btn-danger" onClick={handleShow} >סיום הזמנה</button>

            <Modal
                scrollable={true}
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>סיום הזמנה</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <props.component {...props} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}