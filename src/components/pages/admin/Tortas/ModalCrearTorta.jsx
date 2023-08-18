
import Modal from 'react-bootstrap/Modal';
import CrearTorta from './CrearTorta';

export default function ModalCrearTorta(show, {handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalAdmin'>
      <Modal.Body>
        <CrearTorta/>
      </Modal.Body>
     </Modal>
  )
}
