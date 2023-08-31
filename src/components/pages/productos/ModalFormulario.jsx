
import Modal from 'react-bootstrap/Modal';
import CarritoP2 from '../../carrito/CarritoPaso2';

const ModalFormulario = ({show, handleClose, data}) => {
  
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalPedido' >
      <Modal.Body className='modal-body-detalles'>
      
        <CarritoP2 data={data}/>
        
      </Modal.Body>
    </Modal>
  )
}

export default ModalFormulario