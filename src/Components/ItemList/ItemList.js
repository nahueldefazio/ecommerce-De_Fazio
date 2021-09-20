import React, {Fragment} from 'react';
import Item from "../Item/Item";

function ItemList(props) {

    return (
        <Fragment>
            <ul>
                {props.productos.map((productos, index)=>{
                    return <Item producto={productos}/>
                })}
            </ul>
        </Fragment>
    );
}

export default ItemList;