import React from 'react';
//import CardTartaleta from '../pages/productos/CardTartaleta.jsx';

function ElementoCarrito({ imagenSrc, titulo, precio, cantidad, disminuirCantidad, aumentarCantidad, eliminar }) {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={imagenSrc} alt={titulo} />
      </div>
      <div className="item-details">
        <div className="item-title">{titulo}</div>
        <div className="item-price">${precio}</div>
      </div>
      <div className="item-quantity">
        <button className="quantity-button" onClick={disminuirCantidad}>-</button>
        <span className="quantity">{cantidad}</span>
        <button className="quantity-button" onClick={aumentarCantidad}>+</button>
        <button className="btn btn-danger btn-sm" onClick={eliminar}>Eliminar</button>
      </div>
    </div>
  );
}

export default ElementoCarrito;
