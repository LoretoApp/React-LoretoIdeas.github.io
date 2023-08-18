import Modal from 'react-bootstrap/Modal';
import ModificarStatusTorta from './ModificarStatusTorta';

export default function ModalDesactivarTorta(show, {handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalAdmin'>
      <Modal.Body>
        <ModificarStatusTorta/>
      </Modal.Body>
     </Modal>
  )
}
