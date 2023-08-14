
import Modal from 'react-bootstrap/Modal';
import Carrito from './Carrito';
import "./stylecarrito.css"


function CarritoP({showCar, handleCar}) {

  return (
    <>
      <Modal show={showCar} onHide={handleCar}>
      <Carrito />
      </Modal>
    </>
  );
}

export default CarritoP;