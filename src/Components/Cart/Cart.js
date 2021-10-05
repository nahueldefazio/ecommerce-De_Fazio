import {ItemContext} from "../context/ItemContext";
import {useContext} from "react";

function Cart(props) {

    const {carrito, setCarrito} = useContext(ItemContext);

    const totalCarrito = [0]
    let carritoProductos = []

    function removeProduct(item) {
        carritoProductos = carritoProductos.filter(producto => producto.id !== item.id)
        setCarrito(carritoProductos)
    }

    function removeAll() {
        setCarrito([])
    }

    return (
        <div>
            <h1> CART </h1>
            <ul>
                {
                    carrito.map((item, index) => {
                        console.log(item)
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
                                    <button className={'btn btn-danger'} onClick={() => removeProduct(item)}> X</button>
                                </li>
                            </div>
                        )
                    })
                }
                {carrito.length > 0 && <button className={'btn btn-warning m-2'} onClick={removeAll}>CLEAR</button>}
            </ul>
            <h3>Total: ${totalCarrito.reduce((prev, next) => prev + next)}</h3>
        </div>
    );
}

export default Cart;