import React, {Fragment, useContext} from 'react';
import './CartWidget.css'
import {Link} from "react-router-dom";
import {ItemContext} from "../../context/ItemContext";

function CartWidget(props) {

    const {carrito} = useContext(ItemContext);

    const cantidadTotal = [0]

    return (
        <Fragment>
            <li className="nav-item">
                {
                    carrito.map((item) => {
                        return cantidadTotal.push(item.cantidad)
                    })
                }
                <Link to={'/ecommerce-De_Fazio/cart'} className={'material-icons cartIcon'}>shopping_cart</Link>
            </li>
            <span style={{color: "white"}}>
                {cantidadTotal.reduce((prev, next) => prev + next)}
            </span>

        </Fragment>
    );
}

export default CartWidget;