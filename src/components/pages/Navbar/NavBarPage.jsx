import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet,Link} from "react-router-dom"
import './NavBarPage.css'

function NavBarPage() {
  const ColorNav={
    backgroundColor: '#B8226A', 
  }
  return (
    <>
    <Navbar expand="lg"  style={ColorNav}>
      <Container>
        <a href='/'>
        <img className="LoretoIdeas" src="icons/Logo-loretoideas.png" alt="LoretoIdeas" />
        </a>
        <a href='/'>
        <img className="logo" src="icons/Usuario.png" alt="Logo" href="./"/>
        </a>
        <div className="div-con-linea"></div>
        <a href='/'>
        <img className="carrito" src="icons/carrito.png" alt="carrito"/>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default NavBarPage;