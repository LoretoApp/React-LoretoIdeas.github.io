import Modal from 'react-bootstrap/Modal';
import ModificarFullTartaleta from './ModificarFullTartaleta';

export default function ModalModificarTartaleta(show, {handleClose}) {
  return (
    <Modal show={show} onHide={handleClose}className='contenedorModalAdmin' >
      <Modal.Body>
        <ModificarFullTartaleta/>
      </Modal.Body>
     </Modal>
  )
}
