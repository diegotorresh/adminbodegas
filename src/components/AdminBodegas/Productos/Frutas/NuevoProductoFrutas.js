import React from 'react'
import NavBar from '../../../NavBar'

function NuevoProductoBebidas(){
    return(
        <>
        <NavBar/>
        <div class="my-account-area">
                        <div class="row">
                            <div class="col-xl-3 col-md-4">
                                <div class="my-account-alineacion my-account-menu">
                                    <ul class="nav my-account-alineacion account-menu-list flex-column nav-pills" id="pills-tab" role="tablist">
                                        <li>
                                            <a class="link--icon-left" id="pills-dashboard-tab" data-toggle="pill" href="/adminbodegas/productos/nuevoproducto"
                                                role="tab" aria-controls="pills-dashboard" aria-selected="true"><i
                                                    class="fas fa-tachometer-alt"></i>Abarrotes</a>
                                        </li>
                                        <li>
                                            <a id="pills-order-tab" class="link--icon-left" href="/adminbodegas/productos/nuevoproducto/bebidas"><i
                                                    class="fas fa-shopping-cart"></i>Bebidas</a>
                                        </li>
                                        <li>
                                            <a id="pills-order-tab" class="active link--icon-left" href="/adminbodegas/productos/nuevoproducto/frutas"><i
                                                    class="fas fa-shopping-cart"></i>Frutas</a>
                                        </li>
                                        <li>
                                            <a id="pills-order-tab" class="link--icon-left" href="/adminbodegas/productos/nuevoproducto/verduras"><i
                                                    class="fas fa-shopping-cart"></i>Verduras</a>
                                        </li>
                                        <li>
                                            <a id="pills-order-tab" class="link--icon-left" href="/adminbodegas/productos/nuevoproducto/carnes"><i
                                                    class="fas fa-shopping-cart"></i>Carnes</a>
                                        </li>
                                        <li>
                                            <a id="pills-download-tab" class="link--icon-left" href="/adminbodegas/productos"><i class="fas fa-cloud-download-alt"></i>Atras</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="alineacion col-xl-8 col-md-8">
                                <div class="alineacion abarrotes tab-content my-account-tab" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">
                                        <div class="my-account-order account-wrapper">
                                            <h4 class="account-title">Frutas</h4>
                                            <div class="botones_seccion account-table text-center m-t-30 table-responsive">
                                                <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">FRUTOS SECOS</a>
                                                <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">CITRICOS</a>
                                            </div>
                                            <div class="botones_seccion account-table text-center m-t-30 table-responsive">
                                                <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">FRUTOS ROJOS</a>
                                                <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--semi-bold">FRUTAS DULCES</a>
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

export default NuevoProductoBebidas;