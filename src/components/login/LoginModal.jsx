import Modal from "react-bootstrap/Modal";
import "../login/stylesLogin.css";
import AppLogin from "./AppRegister";

function LoginModal({ showLogin, HandleLogin }) {
  return (
    <>
      <Modal show={showLogin} onHide={HandleLogin}>
        <AppLogin />
      </Modal>
    </>
  );
}

export default LoginModal;
