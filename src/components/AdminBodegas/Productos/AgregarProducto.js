import React from 'react'
import NavBar from '../../NavBar'
import empleado from '../../../assets/imagenes/empleado.jpg'

function NuevoProducto(){
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
                            <label for="alerta_vencimiento">Generador de Alerta (dias):</label>
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
                                    <input className="alertas" type="text" id="alerta_stock_unidad"/>
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

export default NuevoProducto;