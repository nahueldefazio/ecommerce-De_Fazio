import React, {Fragment} from 'react';
import logo from '../../images/muebles.png'
import '../NavBar/NavBar.css'
import CartWidget from "./CartWidget/CartWidget";
import {NavLink} from "react-router-dom";


function NavBar(props) {
    return (
        // <Fragment>
        //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //         <div className="container-fluid">
        //             <a className="navbar-brand"><img src={logo} alt={'Web Site Logo'}/></a>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        //                     data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
        //                     aria-label="Toggle navigation">
        //             </button>
        //             <div className="collapse navbar-collapse justify-content-end fontSize" id="navbarNavDropdown">
        //                 <ul className="navbar-nav subMenus">
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link active" aria-current="page"
        //                                  to={'/ecommerce-De_Fazio/'}>Home</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link active" aria-current="page"
        //                                  to={'/ecommerce-De_Fazio/electronics'}>Electronics</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link" to={'/ecommerce-De_Fazio/jewelery'}>Jewelery</NavLink>
        //                     </li>
        //                     <li className="nav-item dropdown">
        //                         <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink"
        //                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             Clothing
        //                         </a>
        //                         <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //                             <li><NavLink className="dropdown-item" to={'/ecommerce-De_Fazio/menclothing'}>Men
        //                                 Clothing</NavLink></li>
        //                             <li><NavLink className="dropdown-item" to={'/ecommerce-De_Fazio/womenclothing'}>Women
        //                                 Clothing</NavLink></li>
        //                         </ul>
        //                     </li>
        //                     <CartWidget/>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </Fragment>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={logo}
                                                              alt={'Web Site Logo'}/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink  activeClassName="active" className="nav-link fontSize"
                                     to={'/ecommerce-De_Fazio/'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link fontSize" aria-current="page"
                                     to={'/ecommerce-De_Fazio/electronics'}>Electronics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link fontSize" to={'/ecommerce-De_Fazio/jewelery'}>Jewelery</NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fontSize" id="navbarDropdownMenuLink"
                               role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Clothing
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><NavLink className="dropdown-item fontSize" to={'/ecommerce-De_Fazio/menclothing'}>Men
                                    Clothing</NavLink></li>
                                <li><NavLink className="dropdown-item fontSize" to={'/ecommerce-De_Fazio/womenclothing'}>Women
                                    Clothing</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;