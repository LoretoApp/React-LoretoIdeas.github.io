import Modal from 'react-bootstrap/Modal';
import "./adminModal.css"



export default function AdminModal({accion, show, handleClose, funcion1,funcion2}) {

  return (
    <Modal  show={show} onHide={handleClose} >
       
      <Modal.Body className='modal-admin-view'>
        <div className='modal-admin text-center'>
          <h3 className='titulo-modal-admin'>{accion}</h3>
          <div className="contenedor-boton-admin">
            <button className='btn boton-torta-modal'onClick={funcion1} >
              <h4 className='titulo-boton-modal'>Torta</h4>
            </button>
            <button className='btn boton-tartaleta-modal' onClick={funcion2}>
              
              <h4 className='titulo-boton-modal'>Tartaleta</h4>
            </button>
          </div>
        </div>
      </Modal.Body>
     </Modal>
  )
}
