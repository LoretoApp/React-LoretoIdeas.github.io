import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet,Link} from "react-router-dom"
import './NavBarPage.css'
import CarritoP from '../../carrito/CarritoPrincipal';
import LoginModal from '../../login/LoginModal';

function NavBarPage() {

  const [show, setShow] = useState(false);
  const handleClose= ()=> {
    setShow(false)
  } 

  const handleShow= ()=> {
    setShow(true)
  } 

  const [show2, setShow2] = useState(false);
  const handleClose2= ()=> {
    setShow2(false)
  } 

  const handleShow2= ()=> {
    setShow2(true)
  } 

  const ColorNav={
    backgroundColor: '#B8226A', 
  }
  return (
    <>
    <Navbar expand="lg"  style={ColorNav}>
      <Container>
        <a href='/'>
        <img className="LoretoIdeas" src="icons/Logo-loretoideas.png" alt="LoretoIdeas"/>
        </a>
        <a>
        <img className="logo" src="icons/Usuario.png" alt="Logo" onClick={handleShow}/>
        </a>
        <div className="div-con-linea"></div>
        <a>
        <img className="carrito" src="icons/carrito.png" alt="carrito" onClick={handleShow2}/>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/cocteleria">Coctelería</Link>
            <Link to="/desayunos">Desayunos</Link>
            <Link to="/nosotros">Nosotros</Link>
          </Nav>
          <LoginModal show={show} onHide={handleClose}/>
          <CarritoP show2={show2} onHide2={handleClose2} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default NavBarPage;