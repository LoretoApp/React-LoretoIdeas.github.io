import React, { useState } from 'react';
import PasosCarrito from './PasosCarrito';
import ElementoCarrito from './ElementoCarrito';
import ResumenCarrito from './ResumenCarrito';

function CarritoP1() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (indice) => {
    const nuevoCarrito = carrito.filter((_, index) => index !== indice);
    setCarrito(nuevoCarrito);
  };

  const precioTotal = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  const cantidadTotal = carrito.reduce((total, producto) => total + producto.cantidad, 0);

  return (
    <>
      <div className="contenedor-carrito">
        <div className="cart-contenedor">
          <div className="cart-header">
            <h2 className="title-left">Pedido</h2>
            <button className="btn btn-transparent btn-delete" onClick={() => setCarrito([])}>Eliminar todo</button>
          </div>
          {carrito.map((producto, index) => (
            <ElementoCarrito
              key={index}
              {...producto}
              disminuirCantidad={() => {}}
              aumentarCantidad={() => {}}
              eliminar={() => eliminarDelCarrito(index)}
            />
          ))}
          <ResumenCarrito cantidadTotal={cantidadTotal} precioTotal={precioTotal} />
          <button type="submit" className="btn btn-primary">
              Enviar Pedido
            </button>
        </div>
      </div>
    </>
  );
}

export default CarritoP1;
