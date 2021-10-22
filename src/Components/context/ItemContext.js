import {createContext, useState} from "react";
export const ItemContext = createContext()
const {Provider} = ItemContext

export const ProviderCustomizado = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [contador, setContador] = useState(0);

    const [compra, setCompra] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const valorDelContexto = {
        carrito,
        setCarrito,
        contador,
        setContador,
        show, setShow,
        handleClose,
        handleShow,
        compra,
        setCompra,
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default ItemContext