import Modal from 'react-bootstrap/Modal';
import ModificarStatusTartaleta from './ModificarStatusTartaleta';

export default function ModalDesactivarTartaleta(show, {handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalAdmin' >
      <Modal.Body>
        <ModificarStatusTartaleta/>
      </Modal.Body>
     </Modal>
  )
}
