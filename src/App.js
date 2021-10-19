import './App.css';
import AppRoutes from "./routes/AppRoutes";
import {ProviderCustomizado} from "./Components/context/ItemContext";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (

        <ProviderCustomizado>
            <AppRoutes/>
        </ProviderCustomizado>
    );
}

export default App;
