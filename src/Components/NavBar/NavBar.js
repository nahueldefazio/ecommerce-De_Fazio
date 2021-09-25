import React, {Fragment} from 'react';
import logo from '../../images/muebles.png'
import '../NavBar/NavBar.css'
import CartWidget from "./CartWidget/CartWidget";
import {NavLink} from "react-router-dom";


function NavBar(props) {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="navbar-brand" ><img src={logo} alt={'Web Site Logo'}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        {/*<span className="navbar-toggler-icon"></span>*/}
                    </button>
                    <div className="collapse navbar-collapse justify-content-end fontSize" id="navbarNavDropdown">
                        <ul className="navbar-nav subMenus">
                            <li className="nav-item">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <NavLink className="nav-link active" aria-current="page" to={'/ecommerce-De_Fazio/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <NavLink className="nav-link active" aria-current="page" to={'/ecommerce-De_Fazio/electronics'}>Electronics</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <NavLink className="nav-link"  to={'/ecommerce-De_Fazio/jewlery'}>Jewelery</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Clothing
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><NavLink className="dropdown-item"  to={'/ecommerce-De_Fazio/menclothing'}>Men Clothing</NavLink></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><NavLink className="dropdown-item"  to={'/ecommerce-De_Fazio/womenclothing'}>Women Clothing</NavLink></li>
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