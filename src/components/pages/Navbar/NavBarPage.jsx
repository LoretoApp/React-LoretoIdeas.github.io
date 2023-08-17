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
        <a className='link' href='http://localhost:5173/login'>
        <img className="logo" src="icons/Usuario.png" alt="Logo" onClick={handleLogin}/>
        </a>
        <div className="div-con-linea"></div>
        <a className='link' href='/'>
        <img className="carrito" src="icons/carrito.png" alt="carrito" onClick={handleCar}/>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='link' to="/">Inicio</Link>
            <Link className='link' to="/productos">Productos</Link>
            <Link className='link'to="/cocteleria">Coctelería</Link>
            <Link className='link' to="/desayunos">Desayunos</Link>
            <Link className='link' to="/nosotros">Nosotros</Link>
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