import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import JewleryScreen from "../Components/JewleryScreen/JewleryScreen";
import ElectronicsScreen from "../Components/ElectronicsScreen/ElectronicsScreen";
import MenClothingScreen from "../Components/MenClothingScreen/MenClothingScreen";
import WomenClothingScreen from "../Components/WomenClothingScreen/WomenClothingScreen";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../Components/Cart/Cart";

function AppRoutes() {
    return (
        <div className={'h-100'}>
            <Router>
                <NavBar/>
                <Switch>
                    <Route path='/ecommerce-De_Fazio/' exact component={ItemListContainer} />
                    <Route path='/products/:id' exact component={ItemDetailContainer} />
                    <Route path='/ecommerce-De_Fazio/jewelery' exact component={JewleryScreen} />
                    <Route path='/ecommerce-De_Fazio/electronics' exact component={ElectronicsScreen} />
                    <Route path='/ecommerce-De_Fazio/menclothing' exact component={MenClothingScreen} />
                    <Route path='/ecommerce-De_Fazio/womenclothing' exact component={WomenClothingScreen} />
                    <Route path='/ecommerce-De_Fazio/cart' exact component={Cart} />
                </Switch>
            </Router>
        </div>
    );
}

export default AppRoutes;