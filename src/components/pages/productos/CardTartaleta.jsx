/* eslint-disable react/prop-types */
import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

 
export default function CardTartaleta(props) {
  const src = 'img/'
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-producto">
      <div className="card m-0">
        <div className="img-container m-2">
          <div className="m-3">
            <img src={src+props.imagen} id="imagen-card" className="card-img-top img-tarta" alt={props.img_descripcion}/>
          </div>
          <div className="btn-detalle mb-2">
            <button className="btn detalle card-text" onClick={handleShow}>+ Detalle</button>
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
      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
        <div className="mitad-arriba">
        <button className='boton-flecha p-0 ' onClick={handleClose}>
          <img className="flecha" src="icons/flecha naranja.png" alt="flecha" />
        </button>
        <a href="#">
          <img
            className="kuchen"
            src={src+props.imagen}
            alt={props.img_descripcion}
          />
        </a>
        <div className="contenedor">
          <div className="izquierda">
            <h5 className='mt-4'>{props.diametro}</h5>
            
          </div>
          <div className="derecha">
            <a href="#">
              <img className="corazon" src="icons/Me-gusta.png" alt="corazon" />
            </a>
            <br></br>
           $ {props.precio}
          </div>
        </div>
      </div>

      <div className="mitad-abajo">
        <p className="titulo"> {props.nombre} </p>
        <p className='descripcion'>{props.descripcion}</p>
       
        
          <a className='btn btn-carrito'>Agregar <img className="carrito" src="icons/carrito.png" alt="carrito" /></a>
        
      </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
