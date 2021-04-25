import React from 'react'
import logo from '../assets/img/logo/logo.png'

function NavBar(){
    return(
        <div className="header__center sticky-header p-tb-10">
            <div className="container">
                <div className="row">
                    <div className="responsive col-12 d-flex justify-content-between align-items-center">
                        <div className="header__logo">
                            <a href="index.html" className="header__logo-link img-responsive">
                                <img className="header__logo-img img-fluid" src={logo} alt=""/>
                            </a>
                        </div>
                        <div className="header-menu">
                            <nav>
                                <ul className="header__nav">
                                    <li className="header__nav-item pos-relative">
                                        <a href="/adminbodegas/tiendas" className="header__nav-link">Mis Tiendas</a>
                                    </li>
                                    <li className="header__nav-item pos-relative">
                                        <a href="/adminbodegas/productos" className="header__nav-link">Productos</a>
                                    </li> 
                                    <li className="header__nav-item pos-relative">
                                        <a href="/adminbodegas/sugerencias" className="header__nav-link">Sugerencias</a>
                                    </li>
                                    <li className="header__nav-item pos-relative">
                                        <a href="#" className="header__nav-link">Estadisticas</a>
                                    </li>
                                    <li className="header__nav-item pos-relative">
                                        <a href="#" className="header__nav-link">Nosotros</a>
                                    </li>
                                    </ul>
                                </nav>
                            </div>
                            <ul className="header__user-action-icon">
                                <li>
                                    <a href="my-account.html">
                                        <i className="icon-users"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="wishlist.html">
                                        <i className="icon-heart"></i>
                                        <span className="item-count pos-absolute">3</span>
                                    </a>
                                </li> 
                                <li>
                                    <a href="#offcanvas-add-cart__box" className="offcanvas-toggle">
                                        <i className="icon-shopping-cart"></i>
                                        <span className="wishlist-item-count pos-absolute">3</span>
                                    </a>
                                </li>
                            </ul> 
                        </div>
                    </div>
                </div>
            <div className="header__bottom p-tb-30">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="alineacion col-xl-3 col-lg-3">
                            <div className="header-menu-vertical pos-relative">
                                <h4 className="menu-title link--icon-left"><i className="far fa-align-left"></i>CATEGORIES</h4>
                                <ul className="menu-content pos-absolute">
                                    <li className="menu-item"><a href="#">Search Terms</a></li>
                                    <li className="menu-item"><a href="#">Advanced Search</a></li>
                                    <li className="menu-item"><a href="#">Helps & Faqs</a></li>
                                    <li className="menu-item"><a href="#">Store Location</a></li>
                                    <li className="menu-item"><a href="#"> Orders & Returns</a></li>
                                    <li className="menu-item"><a href="#"> Deliveries</a></li>
                                    <li className="menu-item"><a href="#"> Refund & Returns</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <form className=" alineacion_navbar header-search" action="#" method="post">
                                <div className=" header-search__content pos-relative">
                                    <input type="search" name="header-search" placeholder="Search our store" required/>
                                    <button className="pos-absolute" type="submit"><i className="icon-search"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="alineacion_numero col-xl-2 col-lg-3">
                            <div className=" header-phone text-right"><span>Contactanos: 123 456 789</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;