import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import {firestore} from "../../firebase";

function ElectronicsScreen(props) {

    const [productos, setProductos] = useState([])

    useEffect(() => {

        // getProductos('https://fakestoreapi.com/products/category/electronics')

        //Tengo una referencia de la db
        const db = firestore

        //.get() .where().get() .doc() .add()

        //Obtengo la coleccion de productos
        const coleccion = db.collection("items")
        const consulta = coleccion.where("category", "==", "electronics").get()
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
    //     for (let joyas of results) {
    //         productosArr.push(joyas)
    //     }
    //     setProductos(prevState => [...prevState, ...productosArr])
    // }

    if (productos.length > 0) {
        return (
            <div>
                <h1 className={'m-3'} >Electronics</h1>
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

export default ElectronicsScreen;