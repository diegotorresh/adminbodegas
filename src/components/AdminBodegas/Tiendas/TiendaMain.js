import React from 'react'
import NavBar from '../../NavBar'

const TiendaMain = () => {
    return (
      <>
        <NavBar />
        <section >
          <div className="container">
            <div className="row">
              <div className="tiendas__prioption">
                <h3 className="">Bodegas: La Curva</h3>
                <a href="/adminbodegas/tiendas/nuevatienda">
                  Crear nuevo local 
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
                            <td className="sombreado">Representante legal:</td>
                            <td className="sombreado1">Marco Alberto</td>
                          </tr>
                          <tr>
                            <td className="sombreado">Delivery:</td>
                            <td className="sombreado1">Pedro Suarez</td>
                          </tr>
                          <tr>
                            <td className="sombreado">Horario de atención:</td>
                            <td className="sombreado1">9:00 - 18:00</td>
                          </tr>
                          <tr>
                            <td className="sombreado">Días de atención:</td>
                            <td className="sombreado1">L-M-X-J-V-S </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tiendas__botones">
                      <a href="/adminbodegas/apropromociones" className="tiendas__btnaprobar">
                        Aprobar promociones
                      </a>
                      <a href="/adminbodegas/repartidores" className="tiendas__btnaprobar">
                        Repartidores
                      </a>
                    </div>
                    <div className="tiendas__botones">
                        <a href="/adminbodegas/tiendas/nuevatienda" className="tiendas__btneditar">
                            Editar
                        </a>
                        <a href="/adminbodegas/tiendas" className="tiendas__btneliminar">
                            Eliminar
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

export default TiendaMain;