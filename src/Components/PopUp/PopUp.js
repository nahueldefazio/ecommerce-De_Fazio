import React from 'react';
import {Modal} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./PopUp.css"

function PopUp(props) {

    return (
        <div className={'background'}>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter" >
                        Thanks for your purchase
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Here we leave your verification code for your purchase. Save it and don't lose it!</h5>
                    <p>

                        <span className={'fs-3 fw-bold'}>  Code: {props.compra} </span>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <NavLink onClick={props.onHide} to={'/ecommerce-De_Fazio/'} className={'btn btn-success'}>Back to shopping</NavLink>
                </Modal.Footer>
            </Modal>


        </div>
    );
}

export default PopUp;