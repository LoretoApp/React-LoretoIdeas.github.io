import React, { useState } from 'react';

function PasosCarrito() {
  const [pasoActual, setPasoActual] = useState(1);

  const cambiarPaso = (paso) => {
    setPasoActual(paso);
  };

  return (
    <div className="container-cart">
      {/* Botón de regreso */}
      {pasoActual !== 1 && (
        <button className="btn btn-custom" onClick={() => cambiarPaso(pasoActual - 1)}>
          <span className="fas fa-arrow-left"></span>
        </button>
      )}

      <h1 className="text-center">Mi Carrito</h1>

      {/* Botones de paso */}
      <div className="d-flex justify-content-center mt-3 spaced-buttons">
        <div className="d-flex flex-column align-items-center">
          <span className="btn-title justify-content-center">Pedido</span>
          <button
            className={`btn btn-primary rounded-circle${pasoActual === 1 ? '' : pasoActual}`}
            onClick={() => cambiarPaso(1)}
          >
            1
          </button>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span className="btn-title">Añadidos</span>
          <button
            className={`btn btn-primary rounded-circle${pasoActual === 2 ? '' : pasoActual}`}
            onClick={() => cambiarPaso(2)}
          >
            2
          </button>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span className="btn-title">Enviado</span>
          <button
            className={`btn btn-primary rounded-circle${pasoActual === 3 ? '' : pasoActual}`}
            onClick={() => cambiarPaso(3)}
          >
            3
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasosCarrito;
