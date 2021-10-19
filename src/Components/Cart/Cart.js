import {ItemContext} from "../context/ItemContext";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import RegistroCompra from "../RegistroCompra/RegistroCompra";


function Cart(props) {

    const {carrito, setCarrito, setContador, contador, handleClose, handleShow, show} = useContext(ItemContext);

    const totalCarrito = [0]
    let carritoProductos = []

    function removeProduct(item) {
        carritoProductos = carritoProductos.filter(producto => producto.id !== item.id)
        setCarrito(carritoProductos)
        let counter = 0
        carritoProductos.map(item2 => {
            counter += item2.cantidad
        })
        setContador(counter)

    }

    function removeAll() {
        setCarrito([])
        setContador(0)
    }


    if (contador) {
        return (
            <div>
                <h1> CART </h1>
                <ul>
                    {
                        carrito.map((item, index) => {
                            const totalProducto = item.cantidad * item.price
                            carritoProductos.push(item)
                            totalCarrito.push(totalProducto)
                            return (
                                <div>
                                    <li key={index} className={'d-flex'}>
                                        <p className={'m-1 fw-bold'}>{item.title}</p>
                                        <p className={'m-1'}>Precio unitario: ${item.price} - </p>
                                        <p className={'m-1'}>Cantidad: {item.cantidad} - </p>
                                        <p className={'m-1'}>Precio Total: ${totalProducto} - </p>
                                        <button className={'btn btn-danger'} onClick={() => removeProduct(item)}> X
                                        </button>
                                    </li>
                                </div>
                            )
                        })
                    }
                    {carrito.length > 0 && <button className={'btn btn-warning m-2'} onClick={removeAll}>CLEAR</button>}
                </ul>
                <h3>Total: ${totalCarrito.reduce((prev, next) => prev + next)}</h3>
                <Button variant="primary" onClick={handleShow} className={'m-3'}>
                    Finalizar Compra
                </Button>
                <RegistroCompra/>
            </div>
        );
    } else {
        return (
            <div>
                <h1> Empty cart !!!</h1>
                <Link className={'btn btn-warning m-2'} to={"/ecommerce-De_Fazio"}> Start buying </Link>
            </div>
        )
    }

}

export default Cart;