import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        {/* <nav className="navbar navbar-expand-lg navbar-dark"> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container">
                <a className="navbar-brand" href="#">TMS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {/* <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home</a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">
                            <NavLink exact to="/">
                                    Products    
                            </NavLink>
                        </a>

                    </div> */}
                    <ul className="navbar-nav">
                        <li className="nav-item">Home</li>
                        <li className="nav-item" ><Link to={'/about'}>About</Link> </li>
                        <li className="nav-item">
                            <NavLink exact to="/">
                                Products    
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>         */}
                <div className="justify-content-end">
                    {/* <ul className="navbar-nav mr-auto ">
                        <li className="nav-item">
                            <NavLink className="btn btn-outline-success" exact to="/">
                                Products    
                            </NavLink>
                        </li>
                    </ul> */}
                    <Link className="btn btn-outline-success" to="/products/add">Add Product</Link>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;