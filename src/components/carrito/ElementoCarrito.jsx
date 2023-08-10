import React, { useState } from 'react';


function ElementoCarrito({ imagenSrc, titulo, precio }) {
  const [cantidad, setCantidad] = useState(1);

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={imagenSrc} alt={titulo} />
      </div>
      <div className="item-details">
        <div className="item-title">Torta Manjar{titulo}</div>
        <div className="item-price">$7.990{precio}</div>
      </div>
      <div className="item-quantity">
        <button className="quantity-button" onClick={disminuirCantidad}>-</button>
        <span className="quantity">{cantidad}</span>
        <button className="quantity-button" onClick={aumentarCantidad}>+</button>
      </div>
    </div>
  );
};

export default ElementoCarrito;