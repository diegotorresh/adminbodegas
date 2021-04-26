import React from 'react';
import NavBar from '../../NavBar';

const EstadisticasTodal = () => {
  return (
    <>
      <NavBar />
      <section>
        <div className="container">
          <div className="alineacion row sombra mt-2 mb-2 py-3">
            <div className="col-sm-6 ">
              <p className="adminestadisticas__p">Periodo de tiempo</p>
              <div>
                <div className="adminestadisticas__selectoption">
                  <div className="adminestadisticas__time">
                    <input type="checkbox" className="form-check-input" />
                    <p>Días</p>
                  </div>
                  <div className="adminestadisticas__date">
                    <p>Inicio: </p>
                    <input type="date" />
                    <p>Final: </p>
                    <input type="date" />
                  </div>
                </div>
                <div className="adminestadisticas__selectoption">
                  <div className="adminestadisticas__time">
                    <input type="checkbox" className="form-check-input" />
                    <p>Departamento</p>
                  </div>
                  <div className="adminestadisticas__date">
                    <p>Inicio: </p>
                    <input type="date" />
                    <p>Final: </p>
                    <input type="date" />
                  </div>
                </div>
                <div className="adminestadisticas__selectoption">
                  <div className="adminestadisticas__time">
                    <input type="checkbox" className="form-check-input" />
                    <p>Años</p>
                  </div>
                  <div className="adminestadisticas__date">
                    <p>Seleccionar:</p>
                    <select className="form-select">
                      <option selected>2021</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <p className="adminestadisticas__p">Ubicación</p>
                <div className="adminestadisticas__selectoption">
                  <div className="adminestadisticas__time">
                    <input type="checkbox" className="form-check-input" />
                    <p>Bodega1</p>
                  </div>
                  <div className="adminestadisticas__time">
                    <input type="checkbox" className="form-check-input" />
                    <p>Bodega2</p>
                  </div>
                  <div className="adminestadisticas__time">
                    <input type="checkbox" className="form-check-input" />
                    <p>Bodega3</p>
                  </div>
                </div>
              </div>
              <textarea className="adminestadisticas__textarea"></textarea>
              {/*  */}
              <div>
                <p className="adminestadisticas__p mt-2">Producto:</p>
                <div className="adminestadisticas__product">
                  {/*  */}
                  <div className="adminestadisticas__productinputs">

                    <div className="adminestadisticas__productssg">
                      <input type="checkbox" className="form-check-input" />
                      <p>   Nombre</p>
                      <select className="form-select">
                        <option selected>2021</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="adminestadisticas__productssg">
                      <input type="checkbox" className="form-check-input" />
                      <p>Marca</p>
                      <select className="form-select">
                        <option selected>2021</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="adminestadisticas__productssg">
                      <input type="checkbox" className="form-check-input" />
                      <p>Presentación</p>
                      <select className="form-select">
                        <option selected>2021</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  {/*  */}
                  <div>
                    <div className="adminestadisticas__productssg">
                      <input type="checkbox" className="form-check-input" />
                      <p>Categoría</p>
                      <select className="form-select">
                        <option selected>2021</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="adminestadisticas__productssg">
                      <input type="checkbox" className="form-check-input" />
                      <p>Sub categoría</p>
                      <select className="form-select">
                        <option selected>2021</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    
                  </div>
                </div>
              </div>
              {/*  */}
              <textarea className="adminestadisticas__textarea"></textarea>
              <div>
                <p className="adminestadisticas__p pt-3">Dato a analizar</p>
                <div className="boton adminestadisticas__botones">
                  <button data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Volumen de venta</button>
                  <button data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Ganancias</button>
                  <button data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Cantidad de productos</button>
                  <button data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Exportar a excel</button>
                </div>
              </div>
            </div>
            <div>
              <button data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Actualizar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EstadisticasTodal;
