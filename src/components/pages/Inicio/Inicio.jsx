import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import './Inicio.css'
import DarkVariantExample from "../../Carrusel";
import NavBarPage from "../Navbar/NavBarPage";
import Footer from "../Footer/Footer";


function ShapeExample() {
  return (
    <>
    <NavBarPage/>
        <Container className="contenedor-principal-texto w100">
      <Image src="src\assets\img\principal-cuadricula.jfif" fluid />
      <Row>
        <Col xs={4} md={4}>
          <Image
            src="src\assets\img\img-sinFondo\19366477-1931725413735242-5368396916610058380-n_8_119462-removebg-preview.png"
            roundedCircle
            fluid
          />
        </Col>
        <Col xs={4} md={4}>
          <Image
            src="src\assets\img\img-sinFondo\279960008_545667353754430_5340991199334030012_n-removebg-preview (1).png"
            roundedCircle
            fluid
          />
        </Col>
        <Col xs={4} md={4}>
          <Image
            src="src\assets\img\img-sinFondo\351156320_623672149785377_582990706240363725_n-removebg-preview (1).png"
            roundedCircle
            fluid
          />
        </Col>
      </Row>

      <p className="caja-texto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus
        sapiente qui rerum expedita eligendi sint sit minus nobis debitis,
        magnam laudantium odit illo deserunt, iste nostrum omnis, aut fugiat
        amet temporibus accusantium maxime eum. Blanditiis impedit facilis
        maxime sunt!
      </p>
    </Container>
    <DarkVariantExample/>
    <Footer/>
    </>
  );
}

export default ShapeExample;

