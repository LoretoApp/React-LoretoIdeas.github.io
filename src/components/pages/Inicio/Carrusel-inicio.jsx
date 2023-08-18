import Carousel from 'react-bootstrap/Carousel';


function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="light" className='contendor-carrusel-inicio'>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-inicio"
          src="img\torta4.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-inicio"
          src="img\torta1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-inicio"
          src="img\torta3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;