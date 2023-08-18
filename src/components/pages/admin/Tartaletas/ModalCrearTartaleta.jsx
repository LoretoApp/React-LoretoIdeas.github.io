
import Modal from 'react-bootstrap/Modal';
import CrearTartaleta from './CrearTartaleta';

export default function ModalCrearTartaleta(show,{handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalAdmin' >
      <Modal.Body>
        <CrearTartaleta/>
      </Modal.Body>
     </Modal>
  )
}
