import Modal from 'react-bootstrap/Modal';
import MostrarTartaletas from './MostrarTartaletas';

export default function ModalMostrarTartaletas({show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalAdmin'>
      <Modal.Body>
        <MostrarTartaletas/>
        <button className="salir col-12 text-center" onClick={handleClose}>
          <p className="banner-administrador">Salir X</p>
        </button>
      </Modal.Body>
    </Modal>
  )
}
