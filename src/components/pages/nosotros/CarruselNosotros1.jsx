import Carousel from 'react-bootstrap/Carousel';


function CarruselNosotros1() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carruselNosotros d-block w-100 carousel-image"
          src="img\foto-local.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carruselNosotros d-block w-100 carousel-image"
          src="img\torta1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carruselNosotros d-block w-100 carousel-image"
          src="img\torta3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselNosotros1;