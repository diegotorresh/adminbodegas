import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Redirect, Switch, Link, Route} from 'react-router-dom'
import SugerenciasMain from '../components/AdminBodegas/Sugerencias/SugerenciasMain'
import NavBar from '../components/NavBar'
import TiendaMain from '../components/AdminBodegas/Tiendas/TiendaMain'
import AprobarPromociones from '../components/AdminBodegas/Promociones/AprobarPromociones'
import NuevaTienda from '../components/AdminBodegas/Tiendas/NuevaTienda'
import Repartidores from '../components/AdminBodegas/Repartidores/Repartidores'
import NuevoRepartidor from '../components/AdminBodegas/Repartidores/NuevoRepartidor'
import Productos from '../components/AdminBodegas/Productos/Productos'
import NuevoProducto from '../components/AdminBodegas/Productos/Abarrotes/NuevoProducto'
import AgregarProducto from '../components/AdminBodegas/Productos/AgregarProducto'
import AgregarLote from '../components/AdminBodegas/Productos/AgregarLote'
import NuevaPromocion from '../components/AdminBodegas/Promociones/NuevaPromocion'
import NuevoProductoBebidas from '../components/AdminBodegas/Productos/Bebidas/NuevoProductoBebidas'
import NuevoProductoFrutas from '../components/AdminBodegas/Productos/Frutas/NuevoProductoFrutas'
import NuevoProductoVerduras from '../components/AdminBodegas/Productos/Verduras/NuevoProductoVerduras'
import NuevoProductoCarnes from '../components/AdminBodegas/Productos/Carnes/NuevoProductoCarnes'
import Arroz from '../components/AdminBodegas/Productos/Abarrotes/Arroz'
import Aceites from '../components/AdminBodegas/Productos/Abarrotes/Aceites'
import Cervezas from '../components/AdminBodegas/Productos/Bebidas/Cervezas'
import Gaseosas from '../components/AdminBodegas/Productos/Bebidas/Gaseosas'
import Estadisticas from '../components/AdminBodegas/Estadisticas/Estadisticas'
import EstadisticasEvaluacion from '../components/AdminBodegas/Estadisticas/EstadisticasEvaluacion'
import EstadisticasTodal from '../components/AdminBodegas/Estadisticas/EstadisticasTodal'


const AdminBodegasRoutes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/adminbodegas/sugerencias" component={SugerenciasMain}/>
                <Route exact path="/adminbodegas/navbar" component={NavBar}/>
                <Route exact path="/adminbodegas/tiendas" component={TiendaMain}/>
                <Route exact path="/adminbodegas/apropromociones" component={AprobarPromociones}/>
                <Route exact path="/adminbodegas/tiendas/nuevatienda" component={NuevaTienda}/>
                <Route exact path="/adminbodegas/repartidores" component={Repartidores}/>
                <Route exact path="/adminbodegas/repartidores/nuevorepartidor" component={NuevoRepartidor}/>
                <Route exact path="/adminbodegas/productos" component={Productos}/>
                <Route exact path="/adminbodegas/productos/agregarproducto" component={AgregarProducto}/>
                <Route exat path="/adminbodegas/productos/agregarlote" component={AgregarLote}/>
                <Route exact path="/adminbodegas/productos/nuevoproducto" component={NuevoProducto}/>
                <Route exact path="/adminbodegas/productos/nuevapromocion" component={NuevaPromocion}/>
                <Route exact path="/adminbodegas/productos/nuevoproducto/bebidas" component={NuevoProductoBebidas}/>
                <Route exact path="/adminbodegas/productos/nuevoproducto/frutas" component={NuevoProductoFrutas}/>
                <Route exact path="/adminbodegas/productos/nuevoproducto/verduras" component={NuevoProductoVerduras}/>
                <Route exact path="/adminbodegas/productos/nuevoproducto/carnes" component={NuevoProductoCarnes}/>
                <Route exact path="/adminbodegas/productos/nuevoproducto/arroz" component={Arroz}/>
                <Route exact path="/adminbodegas/productos/nuevoproducto/aceites" component={Aceites}/>
                <Route exact path="/adminbodegas/productos/nuevoproducto/bebidas/cervezas" component={Cervezas}/>
                <Route exact path="/adminbodegas/productos/nuevoproducto/bebidas/gaseosas" component={Gaseosas}/>
                <Route exact path="/adminbodegas/estadisticas" component={Estadisticas}/>
                <Route exact path="/adminbodegas/estadisticastodal" component={EstadisticasTodal}/>
                <Route exact path="/adminbodegas/estadisticasevaluacion" component={EstadisticasEvaluacion}/>

            </Switch>
        </Router>
    );
};

export default AdminBodegasRoutes;