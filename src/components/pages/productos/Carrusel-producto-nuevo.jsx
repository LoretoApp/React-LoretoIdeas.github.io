// import Carousel from 'react-bootstrap/Carousel';
import "./carrusel-producto.css"


function CarruselProductoNuevo() {
  return (
    <section className="carruselInicioactual">
      <div className="row"></div>
        <img  className="img_carruInit col-6" src="img\alfajores-6.PNG" alt="" />
        <img className="img_carruInit col-6"  src="img\alfajores-12.PNG" alt="" />
        <img className="img_carruInit col-6"  src="img\alfajores-15.PNG" alt="" />
        <img className="img_carruInit col-6"  src="img\alfajores-espumante-copa.PNG" alt="" />
        <img className="img_carruInit col-6"  src="img\tazon-alfajores.PNG" alt="" />
    </section>
    // <Carousel data-bs-theme="light" className='contendor-carrusel-inicio'>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 carrusel-inicio"
    //       src="img/carrusel1.png"
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 carrusel-inicio"
    //       src="img/carrusel2.png"
    //       alt="Second slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 carrusel-inicio"
    //       src="img/carrusel3.png"
    //       alt="Third slide"
    //     />
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default CarruselProductoNuevo;