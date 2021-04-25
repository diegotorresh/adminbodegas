import React from 'react'
import NavBar from '../../NavBar'

function NuevoRepartidor(){
    return(
        <>
        <NavBar/>
        <div class="my-account-area">
                        <div class="row">
                            <div class="col-xl-3 col-md-4">
                                <div class="my-account-alineacion my-account-menu">
                                    <ul class="nav my-account-alineacion account-menu-list flex-column nav-pills" id="pills-tab" role="tablist">
                                        <li>
                                            <a class="link--icon-left" id="pills-dashboard-tab" href="/adminbodegas/repartidores"><i
                                                    class="fas fa-tachometer-alt"></i>Mis Repartidores</a>
                                        </li>
                                        <li>
                                            <a id="pills-order-tab" class="active link--icon-left" data-toggle="pill" href="/adminbodegas/repartidores/nuevorepartidor" role="tab"
                                                aria-controls="pills-order" aria-selected="true"><i
                                                    class="fas fa-shopping-cart"></i>Crear Repartidor</a>
                                        </li>
                                        <li>
                                            <a id="pills-download-tab" class="link--icon-left" href="/adminbodegas/repartidores"><i class="fas fa-cloud-download-alt"></i>Atras</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="alineacion col-xl-8 col-md-8">
                                <div class="alineacion tab-content my-account-tab" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-account" role="tabpanel"
                                        aria-labelledby="pills-account-tab">
                                        <div class="my-account-details account-wrapper">
                                            <h4 class="account-title">Crear Repartidor</h4>
                                            <div class="account-details">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-box__single-group">
                                                            <input type="text" placeholder="DNI"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-box__single-group">
                                                            <input type="text" placeholder="Nombres"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-box__single-group">
                                                            <input type="text" placeholder="Apellidos"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-box__single-group">
                                                            <input type="text" placeholder="Teléfono"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-box__single-group">
                                                            <input type="text" placeholder="DNI"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-box__single-group">
                                                            <button class="btn btn--box btn--radius btn--small btn--black btn--black-hover-green btn--uppercase font--bold">Crear Repartidor</button>
                                                        </div>
                                                    </div>
                                                </div>
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

export default NuevoRepartidor;