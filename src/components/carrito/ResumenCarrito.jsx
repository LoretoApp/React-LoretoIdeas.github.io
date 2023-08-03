import React from 'react';
import "./Stylecarrito.css/";

function ResumenCarrito({ cantidadTotal, precioTotal }) {
  return (
    <div className="cart-summary">
      <div className="total-quantity">Cantidad total: <span className="quantity">{cantidadTotal}</span></div>
      <div className="total-price">Total: <span className="moneyclp"> $ <span className="price">{precioTotal}</span></span></div>
    </div>
  );
};

export default ResumenCarrito;