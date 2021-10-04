import React, {Fragment, useState} from 'react';
import './ItemCount.css'

function ItemCount(props) {

    const [contador, setContador] = useState(0)

    const handleClickContadorMas = (contador) => {
        if (contador < props.stock) {
            setContador(contador + 1)
        }
    }
    const handleClickContadorMenos = (contador) => {
        if (contador <= props.stock && contador > props.initial) {
            setContador(contador - 1)
        }
    }



    return (
        <Fragment>
            <div className={'contenedorCantidad'}>
                <button className={'botonCantidad menos'} onClick={() => handleClickContadorMenos(contador)}> -</button>
                <span className={'cantidadInput'}> {contador} </span>
                <button className={'botonCantidad mas'} onClick={() => handleClickContadorMas(contador)}> +</button>
            </div>
            <button className={'botonCarrito'} onClick={() => props.onAdd(contador)}> Agregar al carrito</button>
        </Fragment>
    );
}

export default ItemCount;