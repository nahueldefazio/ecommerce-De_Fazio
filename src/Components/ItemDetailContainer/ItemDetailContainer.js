import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer(props) {
    let {id} = useParams()

    const [producto, setProducto] = useState([])
    const [rating, setRating] = useState([])

    useEffect(() => {

        getProducto(`https://fakestoreapi.com/products/${id}`)

    }, [])

    const getProducto = async (url) => {
        const respuesta = await fetch(url);
        const results = await respuesta.json();
        setProducto(results)
        setRating(results.rating)
    }


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