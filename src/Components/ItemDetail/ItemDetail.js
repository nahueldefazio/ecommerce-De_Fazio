import React from 'react';
import {Link, useHistory} from "react-router-dom";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import Spinner from "../Spinner/Spinner";

function ItemDetail(props) {

    let history = useHistory();

    let pathDefault = '/ecommerce-De_Fazio'

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
                        <ItemCount stock={props.detalles.rating.count} initial={0}/>
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