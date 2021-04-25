import React from 'react'
import NavBar from '../../NavBar'
import ubicacion from '../../../assets/imagenes/ubicacion.jpg'
import empleado from '../../../assets/imagenes/empleado.jpg'
import bodega from '../../../assets/imagenes/bodega.jpg'

function NuevaTienda(){
    return(
        <>
            <NavBar/>
            <div className="responsive_nuevo_tienda row">
            <div className="col-lg-4 col-md-6">
                <div className="sidebar__widget m-t-40">
                    <div className="sidebar__box">
                        <h5 className="sidebar__title">Datos Generales</h5>
                    </div>
                    <form action="#" method="post" className="form-box">
                        <div className="form-box__single-group">
                                <label for="nombre_tienda">Nombre Comercial:</label>
                                <input type="text" id="nombre_tienda"/>
                        </div>
                        <div className="form-box__single-group">
                            <label for="ruc">RUC:</label>
                            <input type="text" id="ruc"/>
                        </div>
                        <div className="form-box__single-group">
                            <label for="dueño">Respresentante Legal:</label>
                            <input type="text" id="dueño"/>
                        </div>
                        <div className="sidebar__box">
                            <h5 className="sidebar__title">Crear usuario y Contraseña</h5>
                        </div>
                        <div className="form-box__single-group">
                            <label for="usuario">Usuario:</label>
                            <input type="text" id="usuario"/>
                        </div>
                        <div className="form-box__single-group">
                            <label for="contraseña">Contraseña:</label>
                            <input type="text" id="contraseña"/>
                        </div>

                        <div className="sidebar__box">
                            <h5 className="sidebar__title">Datos del Encargado</h5>
                        </div>
                        <div className="form-box__single-group">
                            <label for="nombre_encargado">Nombres:</label>
                            <input type="text" id="nombre_encargado"/>
                        </div>
                        <div className="form-box__single-group">
                            <label for="apellidos_encargado">Apellidos:</label>
                            <input type="text" id="apellidos_encargado"/>
                        </div>
                        <div className="form-box__single-group">
                            <label for="dni_encargado">DNI:</label>
                            <input type="text" id="dni_encargado"/>
                        </div>

                        <div className="sidebar__box">
                            <h5 className="sidebar__title">Otorgar capacidad de desicion al encargado</h5>
                        </div>
                        <div>
                            <form>
                                <div className="form-box__single-group">
                                    <label for="form-zipcode">Ingreso de Productos:</label>
                                </div>
                                <ul className="shipping-cost m-t-10">
                                    <li>
                                        <label for="ingreso_productos_si">
                                            <input type="radio" className="shipping-select" name="shipping-cost" value="si" id="ingreso_productos_si"/><span>Sí</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="ingreso_productos_no">
                                            <input type="radio" className="shipping-select" name="shipping-cost" value="no" id="ingreso_productos_no"/><span>No</span>
                                        </label>
                                    </li>
                                </ul>
                            </form>
                        </div>

                        <div>
                            <div className="form-box__single-group">
                                <label for="form-zipcode">Creacion de Promociones:</label>
                            </div>
                            <ul className="shipping-cost m-t-10">
                                <li>
                                    <label for="promociones_si">
                                        <input type="radio" className="shipping-select" name="shipping-cost" value="Standard" id="promociones_si"/><span>Sí</span>
                                    </label>
                                </li>
                                <li>
                                    <label for="promociones_no">
                                        <input type="radio" className="shipping-select" name="shipping-cost" value="Express" id="promociones_no"/><span>No</span>
                                    </label>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar__box">
                            <h5 className="sidebar__title">Localización</h5>
                        </div>
                        <div className="form-box__single-group">
                            <label for="direccion">Dirección:</label>
                            <input type="text" id="direccion"/>
                        </div>
                        <div className="form-box__single-group">
                            <label>Ubicacion:</label>
                        </div>
                        <div className="form-box__single-group">
                            <img src={ubicacion}></img>
                        </div>
                    </form>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="sidebar__widget m-t-40">
                    <div className="sidebar__box">
                        <h5 className="sidebar__title">Informacion para la atencion</h5>
                    </div>
                    <form action="#" method="post" className="form-box">
                        <div>
                            <div className="form-box__single-group">
                                <label for="form-zipcode">Delivery:</label>
                            </div>
                            <ul className="shipping-cost m-t-10">
                                <li>
                                    <label for="delivery_si">
                                        <input type="radio" className="shipping-select" name="shipping-cost" value="Standard" id="delivery_si"/><span>Sí</span>
                                    </label>
                                </li>
                                <li>
                                    <label for="delivery_no">
                                        <input type="radio" className="shipping-select" name="shipping-cost" value="Express" id="delivery_no"/><span>No</span>
                                    </label>
                                </li>
                            </ul>
                        </div>

                        <div className="form-box__single-group">
                            <label for="delivery_distancia">Distancia del Delivery:</label>
                            <input type="text" id="delivery_distancia"/>
                        </div>

                        <div className="form-box__single-group">
                            <label for="apertura">Horario de Atención:</label>
                            <input type="text" id="apertura" placeholder="Apertura"/>
                            <input type="text" id="cierre" placeholder="Cierre"/>
                        </div>

                        <div>
                            <div className="form-box__single-group">
                                <label for="form-zipcode">Dias de Atención:</label>
                            </div>
                            <ul className="shipping-cost m-t-10">
                                <li>
                                    <label for="lunes">
                                        <input type="checkbox" classNameName="shipping-select" name="shipping-cost" value="Standard" id="lunes"/><span>L</span>
                                    </label>
                                </li>
                                <li>
                                    <label for="martes">
                                        <input type="checkbox" classNameName="shipping-select" name="shipping-cost" value="Express" id="martes"/><span>M</span>
                                    </label>
                                </li>
                                <li>
                                    <label for="miercoles">
                                        <input type="checkbox" classNameName="shipping-select" name="shipping-cost" value="Express" id="miercoles"/><span>X</span>
                                    </label>
                                </li>
                                <li>
                                    <label for="jueves">
                                        <input type="checkbox" classNameName="shipping-select" name="shipping-cost" value="Express" id="jueves"/><span>J</span>
                                    </label>
                                </li>
                                <li>
                                    <label for="viernes">
                                        <input type="checkbox" classNameName="shipping-select" name="shipping-cost" value="Express" id="viernes"/><span>V</span>
                                    </label>
                                </li>
                                <li>
                                    <label for="sabado">
                                        <input type="checkbox" classNameName="shipping-select" name="shipping-cost" value="Express" id="sabado"/><span>S</span>
                                    </label>
                                </li>
                                <li>
                                    <label for="domingo">
                                        <input type="checkbox" classNameName="shipping-select" name="shipping-cost" value="Express" id="domingo"/><span>D</span>
                                    </label>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar__box">
                            <h5 className="sidebar__title">Fotografias del encargado</h5>
                            <div className="form-box__single-group">
                            <img src={empleado}></img>
                            </div>
                            <div className="form-box__single-group">
                                <img src={bodega}></img>
                            </div>
                        </div>

                        <div className="from-box__buttons m-t-25">
                            <button className="separacion btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold" type="submit">Cancelar</button>
                            <button className="separacion btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold" type="submit">Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}

export default NuevaTienda;