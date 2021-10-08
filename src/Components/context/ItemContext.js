import {createContext, useState} from "react";
export const ItemContext = createContext()
const {Provider} = ItemContext

export const ProviderCustomizado = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [contador, setContador] = useState(0);

    const valorDelContexto = {
        carrito,
        setCarrito,
        contador,
        setContador
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default ItemContext