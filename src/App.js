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
          <ItemListContainer exampleText={'Coming Soon !!'}/>
      </Fragment>
  );
}

export default App;
