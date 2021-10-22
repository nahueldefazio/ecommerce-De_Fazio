import React, {useContext, useState} from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {firestore} from "../../firebase";
import {ItemContext} from "../context/ItemContext";
import Spinner from "../Spinner/Spinner";
import PopUp from "../PopUp/PopUp";
import "./ContactoCompra.css"
function ContactoDeCompra() {

    const {carrito, setCarrito, contador, setContador} = useContext(ItemContext);
    const [validar, setValidar] = useState(false);
    const [compra, setCompra] = useState("");

    const [modalShow, setModalShow] = React.useState(true);

    function cargarRegistroCompra(valores) {

        const coleccion = firestore.collection("ordenes")
        const nueva_orden = {
            buyer: {
                nombre: valores.nombre,
                telefono: valores.Phone,
                email: valores.email
            },
            items: carrito,
            total: contador
        }
        coleccion.add(nueva_orden).then(resultado => {
            setCompra(resultado.id)
        })
            .catch(error => {
                console.log(error)
            })

        setCarrito([])
        setContador(0)
    }

    const ErrorSchema = Yup.object().shape({
        nombre: Yup.string().required("Enter a valid name.").min(3, "Name is too short").max(20, "Name is too long"),
        Phone: Yup.number().required("Phone number is required").positive().integer().max(9999999999, "Phone number too long").min(999999999, "Wrong phone number"),
        email: Yup.string().email("Invalid email").required("An email is required")
    })


    if (!compra && !validar) {
        return (
            <div>
                <Formik initialValues={{
                    nombre: "",
                    Phone: "",
                    email: ""
                }} onSubmit={(values => {
                    cargarRegistroCompra(values);
                    setValidar(true)
                })} validationSchema={ErrorSchema}
                >
                    {
                        (props) => {
                            return (
                                <Form className={'m-auto w-50 center-form'}>
                                    <div className={'d-flex flex-column m-3 align-items-center'}>
                                        <h3 className={'text-center mt-5 fs-1'}>Contact information</h3>
                                        <label>Name: </label>
                                        <Field name={'nombre'} type={'text'} className={'w-100 form-control'}/>
                                        <small className={'error'}>{props.errors.nombre}</small>
                                        <label>Phone number: </label>
                                        <Field name={'Phone'} type={'number'} className={'w-100 form-control'}/>
                                        <small className={'error'}>{props.errors.Phone}</small>
                                        <label>Email: </label>
                                        <Field name={'email'} type={'email'} className={'w-100 form-control'}/>
                                        <small className={'error'}>{props.errors.email}</small>
                                        <button className={'btn btn-outline-success w-50'} type={'submit'} disabled={!props.isValid}> Send
                                        </button>
                                    </div>

                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        );

    } else if (compra && validar) {
        return <PopUp  show={modalShow}
                       onHide={() => setModalShow(false)}
                       compra={compra}/>

    } else if (!compra && validar) {
        return <Spinner/>
    }


}

export default ContactoDeCompra;