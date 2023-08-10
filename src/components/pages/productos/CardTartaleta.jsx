/* eslint-disable react/prop-types */
import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';

 
export default function CardTartaleta(props) {
  const src = 'img/'
  return (
    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-producto">
      <div className="card">
        <div className="img-container m-3">
          <div className="m-3">
            <img src={src+props.imagen} id="imagen-card" className="card-img-top img-fluid" alt={props.img_descripcion}/>
          </div>
          <div className="btn-detalle mb-2">
            <button className="btn detalle card-text">+ Detalle</button>
          </div>
        </div>
        <div className="card-body p-0">
          <div>
            <h5 className="card-title">{props.nombre}</h5>
          </div>
          <div className="d-inline">
            <p className="card-text porciones">{props.diametro}</p>
           </div>
          <div className="d-flex text-center align-items-center justify-content-around mt-2 ">
            <p className="card-text precio">$ {props.precio}</p>
            <a href="#" className="btn boton-agregar align-content-end mb-2">agregar</a>
          </div>
        </div>
      </div>
    </div>
  )
}
