import Carousel from 'react-bootstrap/Carousel';


function CarruselNosotros2() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carruselNosotros2 d-block w-100 carousel-image"
          src="img\etasi.png"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carruselNosotros2 d-block w-100 carousel-image"
          src="img\etasi2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default CarruselNosotros2;