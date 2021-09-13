/**
 * a function component which treat all the thing connecting to a single Pizza
 */

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import PizzaSliceAdditions from './PizzaSliceAdditions';

export default function SinglePizza(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <img src="./images/Pizza.png" alt="PIZZA" onClick={handleShow} />

            <Modal
                scrollable={true}
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>בחר את התוספות הרצויות על כל משולש: (1 ש"ח לכל תוספת)</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <PizzaSliceAdditions {...props} />
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={handleClose}>שמור פרטים</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}