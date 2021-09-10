import React, {Fragment} from 'react';
import logo from '../../images/muebles.png'
import '../NavBar/NavBar.css'
import CartWidget from "./CartWidget/CartWidget";


function NavBar(props) {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end fontSize" id="navbarNavDropdown">
                        <ul className="navbar-nav subMenus">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Muebles Exterior</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Muebles Interior
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Living</a></li>
                                    <li><a className="dropdown-item" href="#">Cocina</a></li>
                                    <li><a className="dropdown-item" href="#">Dormitorio</a></li>
                                </ul>
                            </li>
                            <CartWidget/>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default NavBar;