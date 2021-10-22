import React, {useContext} from 'react';
import './CartWidget.css'
import {Link} from "react-router-dom";
import {ItemContext} from "../../context/ItemContext";

function CartWidget() {

    const { contador} = useContext(ItemContext);

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