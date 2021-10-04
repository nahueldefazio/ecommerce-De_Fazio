import logo from '../../images/eme-shop.png'
import '../NavBar/NavBar.css'
import CartWidget from "./CartWidget/CartWidget";
import {NavLink} from "react-router-dom";


function NavBar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/ecommerce-De_Fazio"><img src={logo}
                                                                                alt={'Web Site Logo'}/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link fontSize"
                                     to={'/ecommerce-De_Fazio/'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link fontSize" aria-current="page"
                                     to={'/ecommerce-De_Fazio/electronics'}>Electronics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link fontSize"
                                     to={'/ecommerce-De_Fazio/jewelery'}>Jewelery</NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="nav-link dropdown-toggle fontSize" id="navbarDropdownMenuLink"
                               role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Clothing
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><NavLink className="dropdown-item fontSize" to={'/ecommerce-De_Fazio/menclothing'}>Men
                                    Clothing</NavLink></li>
                                <li><NavLink className="dropdown-item fontSize"
                                             to={'/ecommerce-De_Fazio/womenclothing'}>Women
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