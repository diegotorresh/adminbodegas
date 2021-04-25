import React from 'react'
import heineken from '../../../assets/imagenes/bebidas/cervezas/heineken.jpg'
import frutos_rojos from '../../../assets/imagenes/frutas/frutos_rojos/frutos_rojos.jpg'
import carne_res from '../../../assets/imagenes/carnes/res/carnes.jpg'
import philadelphia from '../../../assets/imagenes/bebidas/lacteos/philadelphia.jpg'
import jogobella from '../../../assets/imagenes/bebidas/lacteos/jogobella.jpg'
import sprite from '../../../assets/imagenes/bebidas/gaseosas/sprite.jpg'
import agua_mineral from '../../../assets/imagenes/bebidas/agua/agua_mineral.jpg'
import vegetales from '../../../assets/imagenes/vegetales/hortalizas/vegetales.jpg'
import pechuga from '../../../assets/imagenes/carnes/pollo/pechuga.jpg'
import chorizo from '../../../assets/imagenes/carnes/chancho/chorizo.jpg'
import NavBar from '../../NavBar'

function SugerenciasMain() {
  return (
    <>
    <NavBar/>
    <div className="product m-t-100">
            <div className="responsive container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-content section-content--border m-b-35">
                            <h5 className="bajar section-content__title">Estos son los productos que te generaron mas ganancia:</h5>
                            <div className="col-md-12">
                                <div class="alineacion form-box__single-group-1">
                                    <label for="form-country">Bodega</label>
                                    <select id="form-country">
                                        <option value="select-country" selected>Elige una Bodega</option>
                                        <option value="BD">La Curva</option>
                                    </select>
                                </div>
                                <div className=" alineacion form-box__single-group-1">
                                    <label for="form-country">Categoría</label>
                                    <select id="form-country">
                                        <option value="select-country" selected>Elige una Categoría</option>
                                        <option value="BD">Bebidas</option>
                                        <option value="US">Abarrotes</option>
                                        <option value="UK">Vegetales</option>
                                        <option value="TR">Frutas</option>
                                        <option value="CA">carnes</option>
                                    </select>
                                </div>
                                <div className="alineacion form-box__single-group-1">
                                    <label for="form-country">Sub-Categoría</label>
                                    <select id="form-country">
                                        <option value="select-country" selected>Elige una Sub-Categoría</option>
                                        <option value="BD">Arroz</option>
                                        <option value="US">Tuberculos</option>
                                        <option value="UK">Cervezas</option>
                                        <option value="TR">Gaseosas</option>
                                        <option value="CA">Tragos</option>
                                    </select>
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
                                                    <img className="product__img img-fluid" src={heineken} alt=""/>
                                                </a>
                                                <span className="product__label product__label--sale-dis">-34%</span>
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> 
                                            </div>
                                            <div className="product__content m-t-20">
                                                <a href="product-single-default.html" className="product__link">Six Pack de Cervezas Heineken</a>
                                                <div className="responsive product__price m-t-5">
                                                    <span className="product__price">S/27.50 <del>S/29.00</del></span>
                                                </div>
                                            </div> 
                                        </div> 
                                        <div className="product__box product__default--single text-center">

                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src={frutos_rojos} alt=""/>
                                                </a>
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul>
                                            </div> 
                                            <div className="product__content m-t-20">
                                                <a href="product-single-default.html" className="product__link">Frutos Rojos</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$25.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__box product__default--single text-center">
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src={carne_res} alt=""/>
                                                </a>
                                                <span className="product__label product__label--sale-dis">-10%</span>
                                                <div className="product__counter-box">
                                                    <div className="product__counter-item" data-countdown="2023/09/27"></div>
                                                </div>
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> 
                                            </div> 
                                            <div className="product__content m-t-20">
                                                <a href="product-single-default.html" className="product__link">Carne de Res</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$19.00 <del>$21.00</del></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__box product__default--single text-center">
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src={philadelphia} alt=""/>
                                                </a>
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__content m-t-20">
                                                <a href="product-single-default.html" className="product__link">Philadelphia</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$50.00</span>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="product__box product__default--single text-center">
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src={jogobella} alt=""/>
                                                </a>
                                                <span className="product__label product__label--sale-dis">-20%</span>
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> 
                                            </div>
                                            <div className="product__content m-t-20">
                                                <a href="product-single-default.html" className="product__link">Jogobella</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">3.50 <del>4.00</del></span>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="product__box product__default--single text-center">
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src={sprite} alt=""/>
                                                </a>
                                                <span className="product__label product__label--sale-dis">-34%</span>
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul>
                                            </div> 
                                            <div className="product__content m-t-20">
                                                <a href="product-single-default.html" className="product__link">Gaseosa Sprite</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">2.50 <del>3.00</del></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__box product__default--single text-center">
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src={agua_mineral} alt=""/>
                                                </a>
                                                <span className="product__label product__label--sale-dis">-34%</span>
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul>
                                            </div> 
                                            <div className="product__content m-t-20">
                                                <a href="product-single-default.html" className="product__link">Agua Mineral San Carlos</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">1.50 <del>2.00</del></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__box product__default--single text-center">
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src={vegetales} alt=""/>
                                                </a>
                                                <span className="product__label product__label--sale-dis">-35%</span>
                                                <div className="product__counter-box">
                                                    <div className="product__counter-item" data-countdown="2021/03/01"></div>
                                                </div>
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> 
                                            </div> 
                                            <div className="product__content m-t-20">
                                                <a href="product-single-default.html" className="product__link">Vegetales</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">6.00 <del>6.30</del></span>
                                                </div>
                                            </div> 
                                        </div> 
                                        <div className="product__box product__default--single text-center">

                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src={pechuga} alt=""/>
                                                </a>
                                                <span className="product__label product__label--sale-out">Escaso</span>               
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul>
                                            </div> 
                                            <div className="product__content m-t-20">
                                                <a href="product-single-default.html" className="product__link">Pechuga</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">8.00 <del>8.60</del></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__box product__default--single text-center">
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src={chorizo} alt=""/>
                                                </a>
                                                <span className="product__label product__label--sale-out">Escaso</span>
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__content m-t-20">
                                                <a href="product-single-default.html" className="product__link">Chorizo</a>
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

export default SugerenciasMain;