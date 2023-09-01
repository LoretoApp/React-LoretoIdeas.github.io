
import Modal from 'react-bootstrap/Modal';
import AgendamientoTorta from '../../carrito/AgendamientoTorta';

const ModalFormularioTorta = ({show, handleClose, nombre, porciones, precio}) => {
  
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalPedido' >
      <Modal.Body className='modal-body-detalles'>
      
        <AgendamientoTorta nombre={nombre} porciones={porciones} precio={precio}/>
        
      </Modal.Body>
    </Modal>
  )
}

export default ModalFormularioTorta