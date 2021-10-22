import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import {firestore} from "../../firebase";

function JewleryScreen() {

    const [productos, setProductos] = useState([])

    useEffect(() => {

        const coleccion = firestore.collection("items")
        const consulta = coleccion.where("category", "==", "jewelery").get()
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
                <h1 className={'m-3'} >Jewelery</h1>
                <hr/>
                <ul className={'grilla'}>
                    <ItemList listaProductos={productos}/>
                </ul>
            </div>
        );
    } else {
        return <Spinner/>

    }
}

export default JewleryScreen;