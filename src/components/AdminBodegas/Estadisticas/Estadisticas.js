import React from 'react';
import NavBar from '../../NavBar';
import heineken from '../../../assets/imagenes/bebidas/cervezas/heineken.jpg'
import frutos_rojos from '../../../assets/imagenes/frutas/frutos_rojos/frutos_rojos.jpg'
import carne_res from '../../../assets/imagenes/carnes/res/carnes.jpg'
import philadelphia from '../../../assets/imagenes/bebidas/lacteos/philadelphia.jpg'
import jogobella from '../../../assets/imagenes/bebidas/lacteos/jogobella.jpg'
const Estadisticas = () => {
  return (
    <>
      <NavBar />
      <section>
        <div className="container">
          <div className="alineacion row">
            <div className=" sugerencia__productos pt-5 ">
              <div className="alineacion responsive sugerencia__listcard">
                <div className="card sugerencia__card">
                  <img src={heineken} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="text-center">Card Heineken</h5>
                  </div>
                </div>
                <div className="card sugerencia__card">
                  <img src={frutos_rojos} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="text-center">Frutos Rojos</h5>
                  </div>
                </div>
                <div className="card sugerencia__card">
                  <img src={carne_res} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="text-center">Carne de Res</h5>
                  </div>
                </div>
                <div className="card sugerencia__card">
                  <img src={philadelphia} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="text-center">Philadelphia</h5>
                  </div>
                </div>
                <div className="card sugerencia__card">
                  <img src={jogobella} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="text-center">Jogobella</h5>
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

export default Estadisticas;