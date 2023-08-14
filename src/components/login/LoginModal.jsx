import Modal from 'react-bootstrap/Modal';
import "../login/styles.css"
import AppLogin from './AppLogin';


function LoginModal({ show, onHide }) {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <AppLogin />
      </Modal>
    </>
  );
}

export default LoginModal;