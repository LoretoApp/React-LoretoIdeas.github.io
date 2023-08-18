import Modal from 'react-bootstrap/Modal';
import ModificarFullTorta from './ModificarFullTorta'

export default function ModalModificarTorta(show, {handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalAdmin'>
      <Modal.Body>
        <ModificarFullTorta/>
      </Modal.Body>
     </Modal>
  )
}
