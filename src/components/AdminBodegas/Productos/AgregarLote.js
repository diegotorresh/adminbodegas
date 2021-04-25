import React from 'react'
import NavBar from '../../NavBar'
import empleado from '../../../assets/imagenes/empleado.jpg'

function AgregarLote(){
    return(
        <>
            <NavBar/>
            <div className="responsive_nuevo_tienda row">
            <div className="col-lg-4 col-md-6">
                <div className="sidebar__widget m-t-40">
                    <div className="sidebar__box">
                        <h5 className="sidebar__title">Agregar Lote</h5>
                    </div>
                    <form action="#" method="post" className="form-box">
                        <div className="form-box__single-group">
                            <a href="/adminbodegas/productos/agregarlote" className="separacion btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold" type="submit">Agregar Lote</a>
                        </div>
                        <div className="form-box__single-group">
                                <label for="fecha_lote">Fecha de Vencimiento:</label>
                                <input type="date" id="fecha_lote"/>
                        </div>
                        <div className="form-box__single-group">
                            <label for="stock">Stock Actual:</label>
                            <input type="text" id="stock"/>
                        </div>
                        <div>
                            <div className="form-box__single-group">
                                <label for="form-zipcode">Agregar al Stock:</label>
                            </div>
                            <ul className="shipping-cost m-t-10">
                                <li>
                                    <label for="agregar_stock_unidad">
                                        <input type="radio" className="shipping-select" name="shipping-cost" value="Standard" id="agregar_stock_unidad"/><span>Unidad</span>
                                    </label>
                                    <input className="alertas" type="text" id="agregar_stock_unidad"/>
                                </li>
                                <li>
                                    <label for="agregar_stock">
                                        <input type="radio" className="shipping-select" name="shipping-cost" value="Express" id="agregar_stock"/><span>Sixpack</span>
                                    </label>
                                    <input className="alertas" type="text" id="agregar_stock"/>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar__box">
                            <h5 className="sidebar__title">Detalles Del Lote</h5>
                        </div>
                        <div>
                            <ul className="shipping-cost m-t-10">
                                <li>
                                    <label for="costo_unidad">
                                        <input type="radio" className="shipping-select" name="shipping-cost" value="Standard" id="costo_unidad"/><span>Precio de Compra - Unidad</span>
                                    </label>
                                    <input className="alertas_precio" type="text" id="costo_unidad"/>
                                </li>
                                <li>
                                    <label for="costo_stock">
                                        <input type="radio" className="shipping-select" name="shipping-cost" value="Express" id="costo_stock"/><span>Precio de Compra - Sixpack</span>
                                    </label>
                                    <input className="alertas_precio" type="text" id="costo_stock"/>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="shipping-cost m-t-10">
                                <li>
                                    <label for="precio_unidad">
                                        <input type="checkbox" className="shipping-select" name="shipping-cost" value="Standard" id="precio_unidad"/><span>Precio de Venta - Unidad</span>
                                    </label>
                                    <input className="alertas_precio" type="text" id="precio_unidad"/>
                                </li>
                                <li>
                                    <label for="precio_stock">
                                        <input type="checkbox" className="shipping-select" name="shipping-cost" value="Express" id="precio_stock"/><span>Precio de Venta - Sixpack</span>
                                    </label>
                                    <input className="alertas_precio" type="text" id="precio_stock"/>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="sidebar__widget m-t-40">
                    <div className="sidebar__box">
                        <h5 className="sidebar__title">Fecha de Vencimiento</h5>
                    </div>
                    <form action="#" method="post" className="form-box">
                        <div className="form-box__single-group">
                            <label for="form-zipcode">Generador de Alerta (dias):</label>
                            <input type="text" id="alerta_vencimiento"/>
                        </div>
                        <div className="sidebar__box">
                            <h5 className="sidebar__title">Stock</h5>
                        </div>

                        <div>
                            <div className="form-box__single-group">
                                <label for="form-zipcode">Generar Alerta Stock:</label>
                            </div>
                            <ul className="shipping-cost m-t-10">
                                <li>
                                    <label for="alerta_stock_unidad">
                                        <input type="radio" className="shipping-select" name="shipping-cost" value="Standard" id="alerta_stock_unidad"/><span>Unidad</span>
                                    </label>
                                    <input className="alertas" type="text" id="alerta_vencimiento"/>
                                </li>
                                <li>
                                    <label for="alerta_stock">
                                        <input type="radio" className="shipping-select" name="shipping-cost" value="Express" id="alerta_stock"/><span>Sixpack</span>
                                    </label>
                                    <input className="alertas" type="text" id="alerta_vencimiento"/>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar__box">
                            <h5 className="sidebar__title">Fotografia del producto</h5>
                            <div className="form-box__single-group">
                            <img src={empleado}></img>
                            </div>
                        </div>

                        <div className="from-box__buttons m-t-25">
                            <a href="/adminbodegas/productos" className="separacion btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold" type="submit">Finalizar</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}

export default AgregarLote;