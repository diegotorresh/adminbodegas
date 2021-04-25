import React from 'react'
import NavBar from '../../NavBar'

const AprobarPromociones = () => {
    return (
      <>
        <NavBar />
        <section >
          <div className="container">
            <div className="row">
              <div className="tiendas__prioption">
                <h3 className="">Bodegas: La Curva</h3>
                <a href="/adminbodegas/productos/nuevapromocion">
                  Crear nueva promocion
                </a>
              </div>
            </div>
  
            <div className="row">
              <div className="tiendas__listcard">
                <div className="card col-sm-5">
                  <div className="card-body">
                    <h3 className="card-title">Bodega 1: La Curva</h3>
                    <div className="card-text">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="sombreado">Local:</td>
                            <td className="sombreado1">1</td>
                          </tr>
                          <tr>
                            <td className="sombreado">Dirección:</td>
                            <td className="sombreado1">Calle Las Gardenias 1080 S.M.P</td>
                          </tr>
                          <tr>
                            <td className="sombreado">Responsable:</td>
                            <td className="sombreado1">Marco Alberto</td>
                          </tr>
                          <tr>
                            <td className="sombreado">------------------------</td>
                            <td className="sombreado">-------------------------------</td>
                          </tr>
                          <tr>
                            <td className="sombreado">Nombre:</td>
                            <td className="sombreado1">LA CHELA LOCA</td>
                          </tr>
                          <tr>
                            <td className="sombreado">Stock:</td>
                            <td className="sombreado1">10</td>
                          </tr>
                          <tr>
                            <td className="sombreado">Precio Real de Venta:</td>
                            <td className="sombreado1">22.50</td>
                          </tr>
                          <tr>
                            <td className="sombreado">Ganancia Esperada:</td>
                            <td className="sombreado1">5.00</td>
                          </tr>
                          <tr>
                            <td className="sombreado">Precio de la Promocion:</td>
                            <td className="sombreado1">19.50</td>
                          </tr>
                          <tr>
                            <td className="sombreado">Ganancia Actual:</td>
                            <td className="sombreado1">2.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tiendas__botones">
                        <a href="/adminbodegas/tiendas" className="tiendas__btneditar">
                            Aprobar
                        </a>
                        <a href="/adminbodegas/tiendas" className="tiendas__btneliminar">
                            Rechazar
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

export default AprobarPromociones;