import React from 'react'
import NavBar from '../../NavBar'
import rosado from '../../../assets/imagenes/colores/rosado2.jpg'
import celeste from '../../../assets/imagenes/colores/celeste.jpg'

function Productos(){
    return(
        <>
        <NavBar/>
        <main id="main-container" class="main-container">
        <div class="container">
            <div class="alineacion_producto row">
                <div class="col-12">
                    <div class="section-content">
                        <h5 class="section-content__title">Mis Productos</h5>
                        <div className="tiendas__prioption_1">
                            <a href="/adminbodegas/productos/nuevoproducto">
                                Añadir producto 
                            </a>
                            <a href="/adminbodegas/productos/nuevapromocion">
                                Crear promocion
                            </a>
                            <div class="alineacion form-box__single-group-1">
                                <select id="form-country">
                                    <option value="select-country" selected>Elige una Bodega</option>
                                    <option value="BD">Bodega1</option>
                                    <option value="BD">Bodega2</option>
                                    <option value="BD">Bodega3</option>
                                    <option value="BD">Bodega4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="alinear-buscador col-xl-7 col-lg-6">
                            <form className=" alineacion_navbar header-search" action="#" method="post">
                                <div className=" header-search__content pos-relative">
                                    <input type="search" name="header-search" placeholder="Search our store" required/>
                                    <button className="pos-absolute" type="submit"><i className="icon-search"></i></button>
                                </div>
                            </form>
                    </div>
                    <div class="table-content table-responsive cart-table-content m-t-30">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>ID</th>
                                    <th>Categoría</th>
                                    <th>Sub-Categoría</th>
                                    <th>Marca</th>
                                    <th>Presentación</th>
                                    <th>Stock</th>
                                    <th>Unidad</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="aviso">
                                    <td class="product-thumbnail">
                                        <a href="#"><img class="img-fluid" src="assets/img/product/size-small/product-home-1-img-1.jpg" alt=""/></a>
                                    </td>
                                    <td>1</td>
                                    <td class="product-name"><a href="#">Bebidas</a></td>
                                    <td class="product-price-cart"><span class="amount">Cerveza</span></td>
                                    <td class="product-price-cart">Pilsen</td>
                                    <td class="product-subtotal">Lata 450 ml</td>
                                    <td class="product-subtotal">5</td>
                                    <td class="product-subtotal">SixPack</td>
                                    <td class="product-add-cart">
                                        <a href="/adminbodegas/productos/agregarproducto" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Editar</a>
                                    </td>
                                </tr>
                                <tr className="aviso1">
                                    <td class="product-thumbnail">
                                        <a href="#"><img class="img-fluid" src="assets/img/product/size-small/product-home-1-img-2.jpg" alt=""/></a>
                                    </td>
                                    <td>2</td>
                                    <td class="product-name"><a href="#">Frutas</a></td>
                                    <td class="product-price-cart"><span class="amount">Berries</span></td>
                                    <td class="product-price-cart">BlueBerry</td>
                                    <td class="product-subtotal">250 g</td>
                                    <td class="product-subtotal">15</td>
                                    <td class="product-subtotal">Paquete</td>
                                    <td class="product-add-cart">
                                        <a href="/adminbodegas/productos/agregarproducto" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Editar</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="product-thumbnail">
                                        <a href="#"><img class="img-fluid" src="assets/img/product/size-small/product-home-1-img-3.jpg" alt=""/></a>
                                    </td>
                                    <td>3</td>
                                    <td class="product-name"><a href="#">Verduras</a></td>
                                    <td class="product-price-cart"><span class="amount">Tuberculos</span></td>
                                    <td class="product-price-cart">Papas</td>
                                    <td class="product-subtotal">5 kg</td>
                                    <td class="product-subtotal">10</td>
                                    <td class="product-subtotal">Caja</td>
                                    <td class="product-add-cart">
                                        <a href="/adminbodegas/productos/agregarproducto" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Editar</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="leyenda">
                    <img src={rosado}/>
                    <h10>Alerta por fecha de vencimiento</h10>
                    <img src={celeste}/>
                    <h10>Alerta por falta de stock</h10>
                </div>
            </div>
        </div>
    </main>
    </>
    );
}

export default Productos;