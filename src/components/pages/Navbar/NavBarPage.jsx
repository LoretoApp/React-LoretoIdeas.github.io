import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet,Link} from "react-router-dom"
import './NavBarPage.css'
import CarritoP from '../../carrito/CarritoPrincipal';
import LoginModal from '../../login/LoginModal';

function NavBarPage() {

  const [showLogin, setShowLogin] = useState(false);
  const [showCar, setShowCar] = useState(false);

  const handleLogin = () => showLogin ? setShowLogin(false) : setShowLogin(true);
  const handleCar = () => showCar ? setShowCar(false) : setShowCar(true);

  const ColorNav={
    backgroundColor: '#B8226A', 
  }
  return (
    <>
    <Navbar expand="lg"  style={ColorNav}>
      <Container className='contenedor'>
        <a className='link' href='/'>
        <img className="LoretoIdeas" src="icons/Logo-loretoideas.png" alt="LoretoIdeas"/>
        </a>
        <a className='link'>
        <img className="logo" src="icons/Usuario.png" alt="Logo" onClick={handleLogin}/>
        </a>
        <div className="div-con-linea"></div>
        <a className='link'>
        <img className="carrito" src="icons/carrito.png" alt="carrito" onClick={handleCar}/>
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
          <LoginModal show={showLogin} onHide={handleLogin}/>
          <CarritoP show={showCar} onHide={handleCar} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default NavBarPage;