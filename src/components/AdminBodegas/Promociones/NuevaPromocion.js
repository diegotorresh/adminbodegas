import React from 'react'
import NavBar from '../../NavBar'

function NuevaPromocion(){
    return(
        <>
            <NavBar/>
            <div className="responsive_nuevo_tienda row">
            <div className="col-lg-4 col-md-6">
                <div className="sidebar__widget m-t-40">
                    <div className="sidebar__box">
                        <h5 >Lista de Productos Cerca a la Fecha de Vencimiento</h5>
                    </div>
                    <div class="alineacion form-box__single-group-2">
                        <label for="form-country">Bodega</label>
                        <select id="form-country">
                            <option value="select-country" selected>Elige una Bodega</option>
                            <option value="BD">La Curva</option>
                        </select>
                    </div>
                    <div class="account-table text-center m-t-30 table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                    <th class="no">Marca</th>
                                                        <th class="name">Presentacion</th>
                                                        <th class="date">Stock</th>
                                                        <th class="status">Accion</th>                                                    
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="color">
                                                            <td>Pilsen</td>
                                                            <td>Lata 450 ml</td>
                                                            <td>10</td>
                                                            <td><a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Agregar</a></td>
                                                        </tr>
                                                        <tr className="color">
                                                            <td>Cristal</td>
                                                            <td>1L</td>
                                                            <td>12</td>
                                                            <td><a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Agregar</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Cusqueña</td>
                                                            <td>650ml</td>
                                                            <td>10</td>
                                                            <td><a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Agregar</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="sidebar__widget m-t-40">
                    <div className="sidebar__box">
                        <h5 className="sidebar__title">UNIR PRODUCTOS</h5>
                    </div>
                    <form action="#" method="post" className="form-box">
                        <div className="form-box__single-group">
                            <label for="nombre_prom">Nombre:</label>
                            <input type="text" id="nombre_prom"/>
                        </div>
                        <div className="form-box__single-group">
                            <label for="stock_prom">Stock:</label>
                            <input type="text" id="stock_prom"/>
                        </div>
                        <div className="form-box__single-group">
                            <label for="precio_venta">Precio Real de La Venta:</label>
                            <input type="text" id="precio_venta"/>
                            <label for="ganancia_venta">Ganancia:</label>
                            <input type="text" id="ganancia_venta"/>
                        </div>
                        <div className="form-box__single-group">
                            <label for="precio_prom">Precio de la Promocion:</label>
                            <input type="text" id="precio_prom"/>
                            <label for="ganancia_prom">Ganancia:</label>
                            <input type="text" id="ganancia_prom"/>
                        </div>
                        <div className="from-box__buttons m-t-25">
                            <a href="/adminbodegas/productos" className="separacion btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold" type="submit">Cancelar</a>
                            <a hrerf="/adminbodegas/productos" className="separacion btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold" type="submit">Crear</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}

export default NuevaPromocion;