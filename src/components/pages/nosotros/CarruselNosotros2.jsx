import Carousel from 'react-bootstrap/Carousel';


function CarruselNosotros2() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carruselNosotros2 d-block w-100 carousel-image"
          src="img\premio1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carruselNosotros2 d-block w-100 carousel-image"
          src="img\premio2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default CarruselNosotros2;