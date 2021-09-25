import React from 'react';
import {Link} from "react-router-dom";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {

    let pathBack = ''
    let pathDefault = '/'

    function path(categoria, direccion) {

        switch (categoria) {
            case 'electronics':
                return direccion = '/electronics'
                break;
            case 'jewelery':
                return direccion = '/jewelery'
                break;
            case 'men\'s clothing':
                return direccion = '/menclothing'
                break;
            case 'women\'s clothing':
                return direccion = '/womenclothing"'

        }
    }


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
                    <h5>Rating: {props.rating.rate}</h5>
                    <ItemCount stock={props.rating.count} initial={1}/>
                </div>
            </div>
            <Link className="btn btn-success m-3" to={path(props.detalles.category, pathBack)}>Back to category</Link>
            <Link className="btn btn-success m-3" to={pathDefault}>Back to Home</Link>
        </div>
    );
}

export default ItemDetail;