import React, {Fragment, useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";

const productosIniciales = [
    {titulo: "producto1", precio: 50},
    {titulo: "producto2", precio: 100}
]

function ItemListContainer(props) {

    const [productos, setProductos] = useState([])


    useEffect(() => {
        const mock_async = new Promise((resolver) => {
            setTimeout(() => {
                resolver(productosIniciales)
            }, 2000)
        })

        mock_async
            .then((resultado_de_la_promesa) => {
                setProductos(resultado_de_la_promesa)
            })
    })

    if (productos.length > 0) {
        return (
            <Fragment>
                <ItemList productos={productos}/>
            </Fragment>
        );
    } else {
        return (
            <div className="d-flex align-items-center" >
                <strong>Loading...</strong>
                <div className="spinner-border ml-auto"  role="status" aria-hidden="true"
                     style={{width: "3rem", height: "3rem"}}/>
            </div>
        )
    }

}

export default ItemListContainer;