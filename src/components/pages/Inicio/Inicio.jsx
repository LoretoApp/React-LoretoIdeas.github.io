import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import './Inicio.css'
import DarkVariantExample from "./Carrusel-inicio";
import Footer from "../Footer/Footer";
import NavBarPage from "../navbar/NavBarPage";



function ShapeExample() {
  return ( 
    <div className="viewport">
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


      <p className="caja-texto">
      ¡Bienvenidos a Loreto Ideas! Nuestra pasión por la calidad nos lleva a
          trabajar exclusivamente con los ingredientes más frescos y de mayor
          calidad. Nuestra pastelera se esfuerza por transformar estos
          ingredientes de primera en obras de arte comestibles que deleitarán
          tus sentidos. Ya sea que busques el pastel perfecto para una ocasión
          especial o simplemente desees un capricho, nuestra pagina web te
          invita a explorar una variedad de opciones que reflejan nuestra
          dedicación a la excelencia. Te invitamos a descubrir cómo la pasión
          por los ingredientes y la atención a los detalles se fusionan para
          crear momentos dulcemente inolvidables. Sumérgete en un mundo de
          sabores auténticos y texturas exquisitas mientras celebramos juntos el
          arte de la pastelería. !Te estamos esperando para endulzar tu día!

      </p>
    </div>
    <DarkVariantExample/>
    <Footer/>
    </div>
  );
}

export default ShapeExample;

