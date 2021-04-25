import React from 'react'
import NavBar from '../../NavBar'

function Repartidores(){
    return(
        <>
        <NavBar/>
        <div class="my-account-area">
                        <div class="row">
                            <div class="col-xl-3 col-md-4">
                                <div class="my-account-alineacion my-account-menu">
                                    <ul class="nav my-account-alineacion account-menu-list flex-column nav-pills" id="pills-tab" role="tablist">
                                        <li>
                                            <a class="active link--icon-left" id="pills-dashboard-tab" data-toggle="pill" href="/adminbodegas/repartidores"
                                                role="tab" aria-controls="pills-dashboard" aria-selected="true"><i
                                                    class="fas fa-tachometer-alt"></i>Mis Repartidores</a>
                                        </li>
                                        <li>
                                            <a id="pills-order-tab" class="link--icon-left" href="/adminbodegas/repartidores/nuevorepartidor"><i
                                                    class="fas fa-shopping-cart"></i>Crear Repartidor</a>
                                        </li>
                                        <li>
                                            <a id="pills-download-tab" class="link--icon-left" href="/adminbodegas/tiendas"><i class="fas fa-cloud-download-alt"></i>Atras</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="alineacion col-xl-8 col-md-8">
                                <div class="alineacion tab-content my-account-tab" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">
                                        <div class="my-account-order account-wrapper">
                                            <h4 class="account-title">Repartidores</h4>
                                            <div class="account-table text-center m-t-30 table-responsive">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th class="no">ID</th>
                                                            <th class="name">Nombre</th>
                                                            <th class="date">Apellidos</th>
                                                            <th class="status">DNI</th>
                                                            <th class="total">Telefono</th>
                                                            <th class="action">Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Juan</td>
                                                            <td>Reyes Castro</td>
                                                            <td>74852645</td>
                                                            <td>954852365</td>
                                                            <td><a href="/adminbodegas/repartidores/nuevorepartidor" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Editar</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Cristian</td>
                                                            <td>Huaynates</td>
                                                            <td>75894512</td>
                                                            <td>986532147</td>
                                                            <td><a href="/adminbodegas/repartidores/nuevorepartidor" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Editar</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Sebastian</td>
                                                            <td>Aranda</td>
                                                            <td>79524187</td>
                                                            <td>931254751</td>
                                                            <td><a href="/adminbodegas/repartidores/nuevorepartidor" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">Editar</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default Repartidores;