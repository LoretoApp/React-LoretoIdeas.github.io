import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
            <Link to="/">Inicio</Link>
            <Link to="productos">Productos</Link>
            <Link to="cocteleria">Coctelería</Link>
            <Nav.Link href="desayunos">Desayunos</Nav.Link>
            <Link to="nosotros">Nosotros</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPage;