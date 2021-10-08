import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import Spinner from "../Spinner/Spinner";

function ItemListContainer(props) {

    const [productos, setProductos] = useState([])

    useEffect(() => {

        getProductos('https://fakestoreapi.com/products')

    }, [])

    const getProductos = async (url) => {
        const productosArr = [];
        const respuesta = await fetch(url);
        const results = await respuesta.json();
        for (let elementos of results) {
            productosArr.push(elementos)
        }
        setProductos(prevState => [...prevState, ...productosArr])
    }

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