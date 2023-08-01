import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"

function NavBarPage() {
  const ColorNav={
    backgroundColor: '#B8226A', 
  }
  return (
    <Navbar expand="lg"  style={ColorNav}>
      <Container>
        <Navbar.Brand href="#home">Loreto Ideas</Navbar.Brand>
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