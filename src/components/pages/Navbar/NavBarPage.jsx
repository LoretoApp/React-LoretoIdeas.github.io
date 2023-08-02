import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"
import './NavBarPage.css'

function NavBarPage() {
  const ColorNav={
    backgroundColor: '#B8226A', 
  }
  return (
    <Navbar expand="lg"  style={ColorNav}>
      <Container>
        <a href='/'>
        <img className="LoretoIdeas" src="icons/Logo-loretoideas.png" alt="LoretoIdeas"/>
        </a>
        <a href='/'>
        <img className="logo" src="icons/Usuario.png" alt="Logo"/>
        </a>
        <div className="div-con-linea"></div>
        <a href='/'>
        <img className="carrito" src="icons/carrito.png" alt="carrito"/>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <Nav.Link href="/">Coctelería</Nav.Link>
            <Nav.Link href="/">Desayunos</Nav.Link>
            <Nav.Link href="/">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPage;