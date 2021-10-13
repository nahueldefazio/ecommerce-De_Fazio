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

        // getProducto(`https://fakestoreapi.com/products/${id}`)

        //Tengo una referencia de la db
        const db = firestore

        //.get() .where().get() .doc() .add()

        //Obtengo la coleccion de productos
        const coleccion = db.collection("items")
        const consulta = coleccion.get()

        consulta.then((resultado) => {
            console.log(resultado.docs)
            resultado.docs.forEach(producto => {
                const producto_final = {
                    id: producto.id,
                    ...producto.data()
                }
                if (producto_final.id === id){
                    setProducto(producto_final)
                }

                console.log(producto)
            })
            // setProducto(producto_f)
        })



    }, [id])

    // const getProducto = async (url) => {
    //     const respuesta = await fetch(url);
    //     const results = await respuesta.json();
    //     setProducto(results)
    //     setRating(results.rating)
    // }


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