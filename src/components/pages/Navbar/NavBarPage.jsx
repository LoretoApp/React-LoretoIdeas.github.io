import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBarPage.css'

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
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#link">Coctelería</Nav.Link>
            <Nav.Link href="#link">Desayunos</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPage;