import React, {Fragment, useContext, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import Spinner from "../Spinner/Spinner";
import {ItemContext} from "../context/ItemContext";

function ItemDetail(props) {

    let history = useHistory();

    const [contadorDetail, setContadorDetail] = useState(0);
    const {setCarrito} = useContext(ItemContext);


    const handleClick = (contador) => {
        setContadorDetail(contador)
    }

    const onAdd = (cantidad) => {
        const itemConCantidad = {...props.detalles, cantidad}

        if (cantidad !== 0) {
            setCarrito(prev => {
                return [...prev, itemConCantidad]
            })
            handleClick(cantidad)
        } else {
            alert("NO HAY PRODCUTOS PARA AGREGAR AL CARRITO !!!")
        }
    }


let pathDefault = '/ecommerce-De_Fazio'
let pathCart = '/ecommerce-De_Fazio/cart'

if (props.detalles) {
    return (
        <div className="container mt-3">
            <h1>{props.detalles.title}</h1>
            <div className="item-detail-container">
                <div className="image-container">
                    <img src={props.detalles.image} alt={props.detalles.title}/>
                </div>
                <div className="description-container">
                    <h5>Price: {props.detalles.price}</h5>
                    <h5>Description: {props.detalles.description}</h5>
                    <h5>Rating: {props.detalles.rating.rate}</h5>
                    {contadorDetail === 0 &&
                    <ItemCount stock={props.detalles.rating.count} initial={0}
                               handleClick={handleClick} onAdd={onAdd}/>
                    }
                    {contadorDetail !== 0 &&
                    <Fragment>
                        <h5>Count bought: {contadorDetail}</h5>
                        <Link className="btn btn-success m-3" to={pathCart}>End Buy</Link>
                    </Fragment>
                    }

                </div>
            </div>
            <button className={'btn btn-success m-3'} onClick={() => history.goBack()}>
                Go Back
            </button>
            <Link className="btn btn-success m-3" to={pathDefault}>Home</Link>
        </div>
    );
} else {
    return (
        <Spinner/>
    )
}
}

export default ItemDetail;