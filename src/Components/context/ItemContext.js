import {createContext, useState} from "react";
export const ItemContext = createContext()
const {Provider} = ItemContext

export const ProviderCustomizado = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const valorDelContexto = {
        carrito,
        setCarrito,
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default ItemContext