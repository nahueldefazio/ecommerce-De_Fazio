import React, {useContext, useState} from 'react';
import {ItemContext} from "../context/ItemContext";
import {Button, Modal} from "react-bootstrap";
import {firestore} from "../../firebase";
import swal from 'sweetalert';
import {Formik} from 'formik';
import ContactForm from "../ContactForm/ContactForm";
import * as Yup from "yup";


function RegistroCompra(props) {
    const {carrito, setCarrito, setContador, contador, handleClose, handleShow, show} = useContext(ItemContext);

    async function cargarRegistroCompra(valores) {

        const db = firestore
        const coleccion = await db.collection("ordenes")
        const nueva_orden = {
            buyer: {
                nombre: valores.nombre,
                telefono: valores.telefono,
                email: valores.email
            },
            items: carrito,
            total: contador
        }
        coleccion.add(nueva_orden).then(resultado => {

            swal("Compra realizada con exito!", "Codigo de verificacion: " + resultado.id, "success", {
                button: "Salir",
            });
        })
            .catch(error => {
                console.log(error)
            })

        handleClose()
        setContador(0)
        setCarrito([])
    }

    const ErrorSchema = Yup.object().shape({
        nombre: Yup.string().required("Nombre es requerido").min(3, "Nombre muy corto").max(20, "Nombre muy largo"),
        telefono: Yup.number().required("Telefono requerido").positive().integer(),
        email: Yup.string().email("Email invalido").required("Email es requerido")
    })

    return (

        <Modal show={show} onHide={handleClose}>
            <Formik initialValues={{
                nombre: "",
                telefono: "",
                email: ""
            }} onSubmit={(values => {
                cargarRegistroCompra(values)
            })} validationSchema={ErrorSchema}
                    component={ContactForm}/>
        </Modal>
    );
}

export default RegistroCompra;