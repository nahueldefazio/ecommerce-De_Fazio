import React, {Fragment} from 'react';
import Item from "../Item/Item";

function ItemList(props) {

    return (
        <Fragment>
            {props.listaProductos.map((productos, index) => {
                return <Item key={productos.id}
                             id={productos.id}
                             title={productos.title}
                             image={productos.image}
                             price={productos.price}
                             description={productos.description}/>
            })}
        </Fragment>
    )
}

export default ItemList;