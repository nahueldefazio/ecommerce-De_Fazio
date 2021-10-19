import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import {firestore} from "../../firebase";


function ItemDetailContainer(props) {
    let {id} = useParams()


    const [producto, setProducto] = useState(null)
    const [rating, setRating] = useState(null)

    useEffect(() => {

        const db = firestore
        const coleccion = db.collection("items")
        const consulta = coleccion.get()
        consulta.then((resultado) => {
            resultado.docs.forEach(producto => {
                const producto_final = {
                    id: producto.id,
                    ...producto.data()
                }
                if (producto_final.id === id){
                    setProducto(producto_final)
                }
            })
        })
    }, [id])




    if (producto) {
        return (
            <div>
                <ItemDetail id={id}
                            detalles={producto}
                            rating={rating}/>
            </div>
        );
    } else {
        return (
            <Spinner/>
        )
    }
}

export default ItemDetailContainer;