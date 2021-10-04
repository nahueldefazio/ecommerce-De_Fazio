import {createContext, useState} from "react";
export const ItemContext = createContext()
// const {Provider} = ItemContext
//
// export const ProviderCustomizado = ({children}) => {
//
//     const [estado, setEstado] = useState('');
//     const [carrito, setCarrito] = useState([]);
//
//
//     const cambiarEstado = () => {
//       setEstado(!estado)
//     }
//
//     const valorDelContexto = {
//         estado,
//         cambiarEstado,
//         carrito,
//     }
//
//     return(
//         <Provider value={valorDelContexto}>
//             {children}
//         </Provider>
//     )
// }
//
//
// export default ItemContext