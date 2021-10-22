import React from 'react';
import './Item.css'
import {Link} from "react-router-dom";

function Item(props) {

    return (
        <div className="card m-4" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..." style={{width: "250px", height: "275px"}}/>
            <div className="card-body">
                <h5 className="card-title">
                    {props.title}
                </h5>
                <li className="list-group-item m-2">Stock: {props.stock}</li>
                <li className="list-group-item m-2">{props.price} U$D</li>
                <Link to={`/products/${props.id}`} className="btn btn-primary">
                    More...
                </Link>
            </div>
        </div>
    )
}

export default Item;