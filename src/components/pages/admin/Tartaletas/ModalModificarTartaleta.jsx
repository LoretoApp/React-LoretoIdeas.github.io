import Modal from 'react-bootstrap/Modal';
import ModificarFullTartaleta from './ModificarFullTartaleta';

export default function ModalModificarTartaleta({show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose}className='contenedorModalAdmin' >
      <Modal.Body>
        <ModificarFullTartaleta/>
        <button className="salir col-12 text-center" onClick={handleClose}>
          <p className="banner-administrador">Salir X</p>
        </button>
      </Modal.Body>
     </Modal>
  )
}
