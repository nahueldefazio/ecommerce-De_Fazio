import './App.css';
import AppRoutes from "./routes/AppRoutes";
import {ItemContext, ProviderCustomizado} from "./Components/context/ItemContext";
import {useState} from "react";

function App() {

    const [carrito, setCarrito] = useState([]);

    return (

        <ItemContext.Provider value={{carrito, setCarrito}}>
            <AppRoutes/>
        </ItemContext.Provider>
    );
}

export default App;
