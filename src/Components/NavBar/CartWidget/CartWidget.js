import React, {Fragment, useContext, useEffect, useState} from 'react';
import './CartWidget.css'
import {Link} from "react-router-dom";
import {ItemContext} from "../../context/ItemContext";

function CartWidget(props) {

    const {carrito, contador, setContador} = useContext(ItemContext);
    const cantidadTotal = [0]


    return (
        <div  style={{
            visibility: contador === 0 ? "hidden" : "visible",

        }} className={'d-flex align-items-center'}>
            <li>
                <Link to={'/ecommerce-De_Fazio/cart'} className={'material-icons cartIcon'}>shopping_cart</Link>
            </li>
            <span style={{color: "white"}}>
                {contador}
            </span>

        </div>
    );
}

export default CartWidget;