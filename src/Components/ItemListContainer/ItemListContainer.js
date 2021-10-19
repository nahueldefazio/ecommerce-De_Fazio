import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import Spinner from "../Spinner/Spinner";
import {firestore} from "../../firebase";

function ItemListContainer(props) {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const db = firestore
        const coleccion = db.collection("items")
        const consulta = coleccion.get()
        consulta.then((resultado) => {
            const ArrayProductos = []
            resultado.docs.forEach(producto => {
                const producto_final = {
                    id: producto.id,
                    ...producto.data()
                }
                ArrayProductos.push(producto_final)
            })
            setProductos(prevState => [...prevState, ...ArrayProductos])
        })
    }, [])



    if (productos.length > 0) {
        return (
            <div>
                <h1 className={"m-4"}>All products</h1>
                <hr/>
                <ul className={'grilla'}>
                    <ItemList listaProductos={productos}/>
                </ul>
            </div>
        );
    } else {
        return (
            <Spinner/>
        )
    }

}

export default ItemListContainer;