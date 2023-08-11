
import Modal from 'react-bootstrap/Modal';
import Carrito from './Carrito';
import "./stylecarrito.css"


function CarritoP({show, handleClose}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
      <Carrito />
        <Modal.Header closeButton>
        
        </Modal.Header>
      </Modal>
    </>
  );
}

export default CarritoP;