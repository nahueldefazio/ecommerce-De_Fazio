import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import {Fragment} from "react";
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {

  return (
      <Fragment>
          <header>
              <NavBar/>
          </header>
          <ItemListContainer exampleText={'Coming Soon !!'}/>
          <ItemCount stock={5}
                     initial={1} />
      </Fragment>
  );
}

export default App;
