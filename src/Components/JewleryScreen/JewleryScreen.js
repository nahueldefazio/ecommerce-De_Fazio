import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

function JewleryScreen(props) {

    const [productos, setProductos] = useState([])

    useEffect(() => {

        getProductos('https://fakestoreapi.com/products/category/jewelery')


    }, [])

    const getProductos = async (url) => {
        const productosArr = [];
        const respuesta = await fetch(url);
        const results = await respuesta.json();
        for (let joyas of results) {
            productosArr.push(joyas)
        }
        setProductos(prevState => [...prevState, ...productosArr])
    }

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
        return (
            <Spinner/>
        )
    }
}

export default JewleryScreen;