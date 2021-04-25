import React from 'react';
import pilsen from '../../../../assets/imagenes/bebidas/cervezas/pilsen.jpg'
import cusqueña from '../../../../assets/imagenes/bebidas/cervezas/cusqueña.jpg'
import golden from '../../../../assets/imagenes/bebidas/cervezas/golden.jpg'
import cristal from '../../../../assets/imagenes/bebidas/cervezas/cristal.jpg'
import verde from '../../../../assets/imagenes/colores/verde2.jpg'
import NavBar from '../../../NavBar'

function Cervezas() {
    return (
      <>
      <NavBar/>
      <div className="product m-t-100">
              <div className="responsive container">
                  <div className="row">
                  <h1 class="section-content__title_1">Mis Productos-Nuevo Producto</h1>
                      <div className="col-12">
                          <div className="main_productos section-content section-content--border m-b-35">
                              <h5 className="section-content__title">Buscar:</h5>
                              <div className="bajar_producto col-md-12">
                                  <div className="col-xl-7 col-lg-6">
                                    <form className=" alineacion_navbar_producto header-search" action="#" method="post">
                                        <div className=" header-search__content pos-relative">
                                            <input type="search" name="header-search" placeholder="Search our store" required/>
                                            <button className="pos-absolute" type="submit"><i className="icon-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="leyenda_producto">
                                    <img src={verde}/>
                                    <h10>En promocion</h10>
                                </div>                                  
                              </div>
                          </div> 
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12">
                          <div className="tab-content tab-animate-zoom">
                              <div className="tab-pane show active" id="fruits">
                                  <div className="default-slider default-slider--hover-bg-red product-default-slider">
                                      <div className="responsive product-default-slider-4grid-2rows gap__col--30 gap__row--40">            
                                          <div className="product__box product__default--single text-center">
                                              <div className="product__img-box  pos-relative">
                                                  <a href="product-single-default.html" className="product__img--link">
                                                      <img className="product__img img-fluid" src={cristal} alt=""/>
                                                  </a>
                                                  <a className="product__label-1 product__label--sale-out-1">Agregar</a>
                                                  <ul className="product__action--link pos-absolute">
                                                      <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                      <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                      <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                      <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                  </ul> 
                                              </div>
                                              <div className="product__content m-t-20">
                                                  <a href="product-single-default.html" className="product__link">Six Pack de Cristal</a>
                                                  <div className="responsive product__price m-t-5">
                                                      <span className="product__price">S/27.50 <del>S/29.00</del></span>
                                                  </div>
                                              </div> 
                                          </div> 
                                          <div className="product__box product__default--single text-center">
  
                                              <div className="product__img-box  pos-relative">
                                                  <a href="product-single-default.html" className="product__img--link">
                                                      <img className="product__img img-fluid" src={golden} alt=""/>
                                                  </a>
                                                  <a className="product__label-1 product__label--sale-out-1">Agregar</a>
                                                  <ul className="product__action--link pos-absolute">
                                                      <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                      <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                      <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                      <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                  </ul>
                                              </div> 
                                              <div className="product__content m-t-20">
                                                  <a href="product-single-default.html" className="product__link">Six pack de Golden</a>
                                                  <div className="product__price m-t-5">
                                                      <span className="product__price">$25.00</span>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="product__box product__default--single text-center">
  
                                              <div className="product__img-box  pos-relative">
                                                  <a href="product-single-default.html" className="product__img--link">
                                                      <img className="product__img img-fluid" src={cusqueña} alt=""/>
                                                  </a>
                                                  <a className="product__label-1 product__label--sale-out">Agregar</a>             
                                                  <ul className="product__action--link pos-absolute">
                                                      <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                      <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                      <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                      <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                  </ul>
                                              </div> 
                                              <div className="product__content m-t-20">
                                                  <a href="product-single-default.html" className="product__link">Botella de Cusqueña</a>
                                                  <div className="product__price m-t-5">
                                                      <span className="product__price">8.00 <del>8.60</del></span>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="product__box product__default--single text-center">
                                              <div className="product__img-box  pos-relative">
                                                  <a href="product-single-default.html" className="product__img--link">
                                                      <img className="product__img img-fluid" src={pilsen} alt=""/>
                                                  </a>
                                                  <a className="product__label-1 product__label--sale-out">Agregar</a>
                                                  <ul className="product__action--link pos-absolute">
                                                      <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                      <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                      <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                      <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                  </ul>
                                              </div>
                                              <div className="product__content m-t-20">
                                                  <a href="product-single-default.html" className="product__link">Six Pack de Pilsen</a>
                                                  <div className="product__price m-t-5">
                                                      <span className="product__price">35.00</span>
                                                  </div>
                                              </div>
                                          </div> 
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
  }
  
  export default Cervezas;