import React, { useState } from 'react';
import NavBar from '../../NavBar';

const EstadisticasEvaluacion = () => {
  const [counter, setCounter] = useState(1);
  const handleClick = (index) => {
    setCounter(index);
  };

  console.log(counter);
  return (
    <>
      <NavBar />
      <section>
        <div className="container">
          <div className="alineacion tab-content mt-2 py-3 " id="nav-tabContent">
            <div
              className={
                counter === 1 ? 'tab-pane fade show active' : 'tab-pane fade'
              }
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              {/*  */}
              <div className="row sombra">
                <div className="col-sm-6 ">
                  <h3 className="adminestadisticas__h3">
                    Evolución de totales
                  </h3>
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
                  <textarea className="adminestadisticas__textarea"></textarea>
                  {/*  */}
                  <div>
                    <p className="adminestadisticas__p mt-2">Producto:</p>
                    <div className="adminestadisticas__product">
                      {/*  */}
                      <div className="adminestadisticas__productinputs">
                        <div className="adminestadisticas__productsearch">
                          <p>Buscar:</p>
                          <input type="text" placeholder="search" />
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
                    <div className="adminestadisticas__botones">
                      <button>Volumen de venta</button>
                      <button>Ganancias</button>
                      <button>Cantidad de productos</button>
                      <button>Exportar a excel</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 adminestadisticas__graficos">
                  <button>Actualizar</button>
                  <div>grafico</div>
                </div>
              </div>
              {/*  */}
            </div>
            <div
              className={
                counter === 2 ? 'tab-pane fade show active' : 'tab-pane fade'
              }
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              {/*  */}
              <div className="row sombra">
                <div className="col-sm-6 ">
                  <h3 className="adminestadisticas__h3">
                    Evolución de totales
                  </h3>
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
                  <textarea className="adminestadisticas__textarea"></textarea>
                  {/*  */}
                  <div>
                    <p className="adminestadisticas__p mt-2">Producto:</p>
                    <div className="adminestadisticas__product">
                      {/*  */}
                      <div className="adminestadisticas__productinputs">
                        <div className="adminestadisticas__productsearch">
                          <p>Buscar:</p>
                          <input type="text" placeholder="search" />
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
                    <div className="adminestadisticas__botones">
                      <button>Volumen de venta</button>
                      <button>Ganancias</button>
                      <button>Cantidad de productos</button>
                      <button>Stock</button>
                      <button>Exportar a excel</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 adminestadisticas__graficos">
                  <button>Actualizar</button>
                  <div>grafico</div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <nav className="adminestadisticas__nav">
            <div className="nav nav-tabs " id="nav-tab" role="tablist">
              <button
                className={counter === 1 ? 'nav-link active' : 'nav-link'}
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected={counter === 1 ? 'true' : 'false'}
                onClick={() => handleClick(1)}
              >
                Evaluación de totales
              </button>
              <button
                className={counter === 2 ? 'nav-link active' : 'nav-link'}
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected={counter === 2 ? 'true' : 'false'}
                onClick={() => handleClick(2)}
              >
                Productos top
              </button>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default EstadisticasEvaluacion;