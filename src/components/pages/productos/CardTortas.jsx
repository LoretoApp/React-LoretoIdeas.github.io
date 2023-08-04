/* eslint-disable react/prop-types */
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'


 
export default function CardTortas(props) {
  const src = 'img/'
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-producto">
      <div className="card m-0">
        <div className="img-container m-3">
          <div className="m-3">
            <img src={src+props.imagen} id="imagen-card" className="card-img-top img-fluid" alt={props.img_descripcion}/>
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
            <p className="card-text porciones">{props.porciones[0]} porciones</p>
           </div>
          <div className="d-flex text-center align-items-center justify-content-around mt-2 ">
            <p className="card-text precio">$ {props.precio[0]}</p>
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
            src="img/img-sinFondo/kuchen.png"
            alt="kuchen"
          />
        </a>
        <div className="contenedor">
          <div className="izquierda">
            Medidas
            <div className="medidas">S M L</div>
            Disponible: 06
          </div>
          <div className="derecha">
            <a href="#">
              <img className="corazon" src="icons/Me-gusta.png" alt="corazon" />
            </a>
            <br></br>
            $7.990
          </div>
        </div>
      </div>

      <div className="mitad-abajo">
        <p className="titulo"> Kuchen Mora </p>
        Masa de migas con fruta de mora y mermeladas.
        <div className="medidas-productos">
          <ul>
            <li>Medidas</li>
            <li>S= 8 personas.</li>
            <li>M= 10 personas.</li>
            <li>L= 12 personas.</li>
          </ul>
        </div>
        <div className="agregar">
          <a href="#">Agregar</a>
          <img className="carrito" src="icons/carrito.png" alt="carrito" />
        </div>
      </div>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}
