import React from 'react';
import NavBar from '../../NavBar';
import gloria from '../../../assets/imagenes/marcas/gloria.jpg';
const Nosotros = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="nosotros__informacion col-12">
            <div className="nosotros__editar">
              <h3>Información general</h3>
              <a href="!#">
                Editar
                <i class="far fa-edit"></i>
              </a>
            </div>
            <div>
              <div className="nosotros__contenido">
                <h4>¿Quiénes somos?</h4>
                <textarea rows="5" cols="90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vel facilisis est. Ut nec nunc massa. Phasellus
                  suscipit congue luctus. Donec accumsan erat eget luctus
                  aliquam. Curabitur efficitur est a est lacinia pretium. Morbi
                  mollis, lacus sit amet ullamcorper rutrum, odio felis suscipit
                  lacus, quis consectetur arcu tellus ut sem. Nulla vehicula
                  tellus nisl, in ornare eros ultricies et. Fusce porta
                  fringilla tincidunt. Curabitur eleifend vestibulum vulputate.
                </textarea>
              </div>
              <div className="nosotros__contenido">
                <h4>Misión</h4>
                <textarea rows="5" cols="90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vel facilisis est. Ut nec nunc massa. Phasellus
                  suscipit congue luctus. Donec accumsan erat eget luctus
                  aliquam. Curabitur efficitur est a est lacinia pretium. Morbi
                  mollis, lacus sit amet ullamcorper rutrum, odio felis suscipit
                  lacus, quis consectetur arcu tellus ut sem. Nulla vehicula
                  tellus nisl, in ornare eros ultricies et. Fusce porta
                  fringilla tincidunt. Curabitur eleifend vestibulum vulputate.
                </textarea>
              </div>
              <div className="nosotros__contenido">
                <h4>Visión</h4>
                <textarea rows="5" cols="90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vel facilisis est. Ut nec nunc massa. Phasellus
                  suscipit congue luctus. Donec accumsan erat eget luctus
                  aliquam. Curabitur efficitur est a est lacinia pretium. Morbi
                  mollis, lacus sit amet ullamcorper rutrum, odio felis suscipit
                  lacus, quis consectetur arcu tellus ut sem. Nulla vehicula
                  tellus nisl, in ornare eros ultricies et. Fusce porta
                  fringilla tincidunt. Curabitur eleifend vestibulum vulputate.
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="nosotros__informacion col-12">
            <div className="nosotros__editar">
              <h3>Visita nuestras redes sociales</h3>
              <a href="!#">
                Editar
                <i class="far fa-edit"></i>
              </a>
            </div>
            <div>
              <div className="nosotros__contenido">
                <h4>
                  <i class="fab fa-facebook-f"></i>Facebook
                </h4>
                <input type="text" />
              </div>
              <div className="nosotros__contenido">
                <h4>
                  <i class="fab fa-instagram"></i>Instagram
                </h4>
                <input type="text" />
              </div>
              <div className="nosotros__contenido">
                <h4>
                  <i class="fab fa-whatsapp"></i>Número de whatsaap
                </h4>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="nosotros__informacion col-12">
            <div className="nosotros__editar">
              <h3>Marcas que trabajan con nosotros</h3>
              <a href="!#">
                Editar
                <i class="fas fa-plus-circle"></i>
              </a>
            </div>
            <div className="nosotros__marcas">
              <div className="nosotros__marcasimg">
                <img src={gloria} alt="gloria" />
              </div>
              <div className="nosotros__marcasimg">
                <img src={gloria} alt="gloria" />
              </div>
              <div className="nosotros__marcasimg">
                <img src={gloria} alt="gloria" />
              </div>
              <div className="nosotros__marcasimg">
                <img src={gloria} alt="gloria" />
              </div>
              <div className="nosotros__marcasimg">
                <img src={gloria} alt="gloria" />
              </div>
              <div className="nosotros__marcasimg">
                <img src={gloria} alt="gloria" />
              </div>
              <div className="nosotros__marcasimg">
                <img src={gloria} alt="gloria" />
              </div>
              <div className="nosotros__marcasimg">
                <img src={gloria} alt="gloria" />
              </div>
              <div className="nosotros__marcasimg">
                <img src={gloria} alt="gloria" />
              </div>
              <div className="nosotros__marcasimg">
                <img src={gloria} alt="gloria" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;