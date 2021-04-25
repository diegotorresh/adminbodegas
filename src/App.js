import './assets/css/main.css'
import './assets/css/vendor/plaza-icon.css'
import './assets/css/vendor/fontawesome.css'
import './assets/sass/components/tienda.scss'
import './assets/sass/components/productos.scss'
import './assets/sass/components/estadisticas.scss'

import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import AppRoutes from './router/AppRoutes';


function App() {
  return (
    <AppRoutes/>
  );
}

export default App;
