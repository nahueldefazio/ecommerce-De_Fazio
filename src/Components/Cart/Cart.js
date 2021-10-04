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

    return (
        <div>
            <h1> CART </h1>
            <ul>
                {
                    carrito.map((item, index) => {
                        const totalProducto = item.cantidad * item.rating.count
                        carritoProductos.push(item)
                        totalCarrito.push(totalProducto)
                        return (
                            <li key={index}>
                                {item.title}
                                Precio unitario: ${item.rating.count}
                                Cantidad: {item.cantidad}
                                Precio Total: ${totalProducto}
                                <button className={'btn btn-danger'} onClick={() => removeProduct(item)}> X </button>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Total: ${totalCarrito.reduce((prev, next) => prev + next)}</h3>
        </div>
    );
}

export default Cart;