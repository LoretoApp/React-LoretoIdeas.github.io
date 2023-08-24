import Carousel from 'react-bootstrap/Carousel';


function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="light" className='contendor-carrusel-inicio'>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-inicio"
          src="img/carrusel1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-inicio"
          src="img/carrusel2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-inicio"
          src="img/carrusel3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;