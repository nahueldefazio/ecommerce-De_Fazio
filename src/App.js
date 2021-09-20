import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import {Fragment} from "react";

function App() {

  return (
      <Fragment>
          <header>
              <NavBar/>
          </header>
          <ItemListContainer/>

      </Fragment>
  );
}

export default App;
