import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import './Inicio.css'
import DarkVariantExample from "./Carrusel-inicio";
import Footer from "../Footer/Footer";
import NavBarPage from "../navbar/NavBarPage";



function ShapeExample() {
  return ( 
    <div className="viewport inicio-fondo">
    <NavBarPage/>
        <div className=" container-fluid contenedor-principal-texto w100">
      <Image src="img/principal-cuadricula.jfif" className="p-0 img-cuadricula" />
      <Row className="botones-inicio">
        <Col xs={4} md={4} className="contendor-boton">
          <Image
            src="img\img-sinFondo\19366477-1931725413735242-5368396916610058380-n_8_119462-removebg-preview.png"
            className="boton-inicio-img"
          />
        </Col>
        <Col xs={4} md={4} className="contendor-boton">
          <Image
            src="img\img-sinFondo\279960008_545667353754430_5340991199334030012_n-removebg-preview (1).png"
            className="boton-inicio-img"
          />
        </Col>
        <Col xs={4} md={4}className="contendor-boton">
          <Image
            src="img\img-sinFondo\351156320_623672149785377_582990706240363725_n-removebg-preview (1).png"
            className="boton-inicio-img"
          />
        </Col>
      </Row>
      <Row className="texto-botones-inicio">
        <div className="col-4 col-md-4 contenedor-texto">
          <a href="/productos" className="titulo-boton">Productos</a>
        </div>
        <div className="col-4 col-md-4 contenedor-texto">
        <a href="/desayunos" className="titulo-boton">Desayunos</a>
        </div>
        <div className="col-4 col-md-4 contenedor-texto">
        <a href="/cocteleria" className="titulo-boton">Coctelería</a>
        </div>
      </Row>
      <p className="caja-texto-mobile">
      ¡Bienvenidos a Loreto Ideas! Nuestra pasión por la calidad nos lleva a
          trabajar exclusivamente con los ingredientes más frescos y de mayor
          calidad. Nuestra pastelera se esfuerza por transformar estos
          ingredientes de primera en obras de arte comestibles que deleitarán
          tus sentidos.  !Te estamos esperando para endulzar tu día!
      </p>

      <p className="caja-texto">
      Trabajamos con los mejores ingredientes del país para entregar la mejor calidad a nuestros clientes, porque todos los productos son creados con amor y se nota en el sabor.
      </p>
    </div>
    <DarkVariantExample/>
    <Footer/>
    </div>
  );
}

export default ShapeExample;