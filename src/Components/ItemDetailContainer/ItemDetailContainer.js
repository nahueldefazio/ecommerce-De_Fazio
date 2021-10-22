import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import {firestore} from "../../firebase";


function ItemDetailContainer() {
    let {id} = useParams()
    const [producto, setProducto] = useState(null)

    useEffect(() => {

        const coleccion = firestore.collection("items")
        const consulta = coleccion.get()
        consulta.then((resultado) => {
            resultado.docs.forEach(producto => {
                const producto_final = {
                    id: producto.id,
                    ...producto.data()
                }
                if (producto_final.id === id) {
                    setProducto(producto_final)
                }
            })
        })
    }, [id])

    if (producto) {
        return <ItemDetail id={id}
                           detalles={producto}
        />

    } else {
        return <Spinner/>

    }
}

export default ItemDetailContainer;