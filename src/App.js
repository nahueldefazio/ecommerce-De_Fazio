import './App.css';
import AppRoutes from "./routes/AppRoutes";
import {ProviderCustomizado} from "./Components/context/ItemContext";


function App() {

    return (

        <ProviderCustomizado>
            <AppRoutes/>
        </ProviderCustomizado>
    );
}

export default App;
