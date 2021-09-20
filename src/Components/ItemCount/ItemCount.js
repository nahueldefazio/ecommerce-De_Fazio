import React, {Fragment, useState} from 'react';
import './ItemCount.css'
function ItemCount(props) {

    const [contador, setContador] = useState(0)

    const handleClickContadorMas = (contador) =>{
        if (contador < props.stock){
            setContador(contador+1)
        }
    }
    const handleClickContadorMenos = (contador) => {
        if (contador <= props.stock && contador > props.initial-1) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => {
        if (contador !== 0){
             alert("Productos Agregados CORRECTAMENTE")
        }else
            alert("NO HAY PRODCUTOS PARA AGREGAR AL CARRITO !!!")
    }

    return (
        <Fragment>

                <div className={'contenedorCantidad'}>
                    <button className={'botonCantidad mas'} onClick={()=> handleClickContadorMas(contador)}> + </button>
                    <input className={'cantidadInput'} type={'number'} value={contador}/>
                    <button className={'botonCantidad menos'} onClick={()=> handleClickContadorMenos(contador)}> - </button>
                </div>
                    <button className={'botonCarrito'} onClick={()=> onAdd()}> Agregar al carrito </button>


        </Fragment>
    );
}

export default ItemCount;