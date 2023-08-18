import Modal from 'react-bootstrap/Modal';
import MostrarTartaletas from './MostrarTartaletas';

export default function ModalMostrarTartaletas(show, {handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalAdmin'>
      <Modal.Body>
        <MostrarTartaletas/>
      </Modal.Body>
     </Modal>
  )
}
