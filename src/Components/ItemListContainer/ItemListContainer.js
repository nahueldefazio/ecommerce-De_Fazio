import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import Spinner from "../Spinner/Spinner";
import {firestore} from "../../firebase";

function ItemListContainer(props) {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        // getProductos('https://fakestoreapi.com/products')
        //Tengo una referencia de la db
        const db = firestore

        //.get() .where().get() .doc() .add()

        //Obtengo la coleccion de productos
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
                console.log(ArrayProductos)
            })
            setProductos(prevState => [...prevState, ...ArrayProductos])
        })

    }, [])

    // const getProductos = async (url) => {
    //     const productosArr = [];
    //     const respuesta = await fetch(url);
    //     const results = await respuesta.json();
    //     for (let elementos of results) {
    //         productosArr.push(elementos)
    //         console.log(elementos)//Objeto
    //     }
    //     setProductos(prevState => [...prevState, ...productosArr])
    // }

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