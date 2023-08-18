import Modal from 'react-bootstrap/Modal';
import MostrarTorta from './MostrarTorta';

export default function ModalMostrarTortas(show, {handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalAdmin'>
      <Modal.Body>
        <MostrarTorta/>
      </Modal.Body>
     </Modal>
  )
}
