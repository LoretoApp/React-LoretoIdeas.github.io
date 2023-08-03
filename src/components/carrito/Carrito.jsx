import React from 'react';
import "./Stylecarrito.css/";
import PasosCarrito from './PasosCarrito';
import ElementoCarrito from './ElementoCarrito';
import ResumenCarrito from './ResumenCarrito';
import Footer from '../pages/Footer/Footer';

function Carrito() {
    return (
        <>
        <PasosCarrito/>
        <div className="container">
         <div className="cart-container">
           <div class="cart-header">
           <h2 class="title-left">Pedido</h2>
           <button class="btn btn-transparent btn-delete">Eliminar todo</button>
        </div>
        <ElementoCarrito/>
        <ResumenCarrito/>
         </div>
        </div>
        <Footer/>
        </>
        )
}

export default Carrito;