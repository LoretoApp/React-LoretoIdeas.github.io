import Carousel from 'react-bootstrap/Carousel';


function CarruselNosotros1() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carruselNosotros d-block w-100 carousel-image"
          src="img\inauguracion.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carruselNosotros d-block w-100 carousel-image"
          src="img\inauguracion3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carruselNosotros d-block w-100 carousel-image"
          src="img\inauguracion4.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselNosotros1;