import React from 'react'
import { Outlet, Link } from "react-router-dom";

// import { a } from 'react-router';
// import { a } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="nav1">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-it">
                                <Link to="/" className="navbar-brand">Dukaan</Link>

                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="shop" className="nav-link">Shop</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="/" className="nav-link">MEN<i class="fa-solid fa-chevron-down fa-xs"></i></Link>
                                </li> */}
                                <li class="nav-item dropdown">
                                    <Link to="/" className="nav-link" data-bs-toggle="dropdown" aria-expanded="false">MEN<i class="fa-solid fa-chevron-down fa-xs"></i></Link>
                                    <ul class="dropdown-menu">
                                        <li><Link class="dropdown-item mend" to="#">T-shirts</Link></li>
                                        <li><Link class="dropdown-item mend" to="#">Shirts</Link></li>
                                        <li><Link class="dropdown-item mend" to="#">Jeans</Link></li>
                                        <li><Link class="dropdown-item mend" to="#">Acessories</Link></li>
                                        <li><Link class="dropdown-item mend" to="#">Briefs</Link></li>
                                        <li><Link class="dropdown-item mend" to="#">Shoes</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">WOMEN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">CONTACT</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="/" className="nav-link">ABOUT</Link>
                                </li> */}
                            </ul>
                        </div>
                        <ul className='cartul'>
                            <li className="nav-item nav-cart">
                                <Link to="cart" className="nav-link"><span className='nav-span'><i class="fa-solid fa-bag-shopping"></i></span> <span>Cart (0)</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
