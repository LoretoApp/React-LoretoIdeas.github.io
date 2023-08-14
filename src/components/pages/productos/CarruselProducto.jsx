import Carousel from 'react-bootstrap/Carousel';


function CarruselProducto() {
  return (
    <Carousel data-bs-theme="light" className='carrusel-item carrusel-contenedor'>
      <Carousel.Item >
        <img
          className="d-block w-100 carrusel-producto"
          src="img\torta4.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-producto"
          src="img\torta1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-producto"
          src="img\torta3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselProducto;