import Footer from '../Footer/Footer';
import '../cocteleria/cocteleria.css';
import BotonWsp from '../../Wsp/BotonWsp';
import NavBarPage from "../Navbar/NavBarPage";



function Cocteleria() {
  return (
    <>
    <NavBarPage/>
    <section className='pasteles'>
<img id="imgMozos" src="img\cocteleriaybanqueteria.png" alt="img\cocteleriaybanqueteria.png" />
          <h2 className='cocteleria'>Cocteleria y Banquetería</h2>

          <p className='parrafoCocteleria'>Damos servicios de banquetería para distintos eventos privados o familiares.<br/>
            Se pueden crear menús salados, dulces o mixtos, según lo que necesite el cliente.<br/>
            Se debe hacer la solicitud con al menos 10 días de anticipación.
            Puede escribirnos al WhatsApp para más consultas.</p>
            <p className="cocteleria">Estos son nuestros servicios</p>

            <div className="image-container">
              <img src="img\cocteleria1.jfif"  />
              <img src="img\cocteleria2.jfif"  />
              <img src="img\cocteleria3.jfif"  />
              <img src="img\cocteleria4.jfif"  />
              <img src="img\cocteleria5.jfif"  />
              <img src="img\cocteleria6.jfif"  />
      </div>

    </section>
    <Footer/>
    <BotonWsp/>
    </>
  )
}
export default Cocteleria