import {ItemContext} from "../context/ItemContext";
import {useContext} from "react";
import {Link, NavLink} from "react-router-dom";

function Cart() {

    const {carrito, setCarrito, setContador, contador, handleShow} = useContext(ItemContext);

    const totalCarrito = [0]
    let carritoProductos = []

    function removeProduct(item) {
        carritoProductos = carritoProductos.filter(producto => producto.id !== item.id)
        setCarrito(carritoProductos)
        let counter = 0
        carritoProductos.map((item2) => {
            return counter += item2.cantidad
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
                                <div key={index} className={'m-4'}>
                                    <li  className={'d-flex'}>
                                        <img src={item.image} style={{width: "100px"}}  alt={item.title}/>
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

                </ul>
                {carrito.length > 0 && <button className={'btn btn-warning m-2'} onClick={removeAll}>CLEAR CART</button>}
                <h3>Total: ${totalCarrito.reduce((prev, next) => prev + next)}</h3>
                <NavLink  className={'btn btn-success m-3'} onClick={handleShow}  to={'/ecommerce-De_Fazio/confirm'}>
                    End purchase
                </NavLink>
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