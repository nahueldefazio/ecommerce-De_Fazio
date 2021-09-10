import React, {Fragment} from 'react';
import './CartWidget.css'

function CartWidget(props) {
    return (
        <Fragment>
            <li className="nav-item">
                <span className={'material-icons cartIcon'}>shopping_cart</span>
            </li>
        </Fragment>
    );
}

export default CartWidget;