import Footer from '../Footer/Footer';
import './desayunos.css';
import { Link } from "react-router-dom"
import NavBarPage from "../Navbar/NavBarPage";

function Desayunos() {
  return (
    <>
      <NavBarPage />
      <section className='pasteles'>
<img id="imgMozos" src="img/bannerdesayunos.png" alt="img\cocteleriaybanqueteria.png" />
          <h2 className='desayunos'>Desayunos</h2>

          <p className='parrafoDesayunos'>Damos servicios de desayunos sorpresa para distintos eventos privados o familiares.<br/>
            Se pueden crear menús salados, dulces o mixtos, según lo que necesite el cliente.<br/>
            Se debe hacer la solicitud con al menos 10 días de anticipación.<br/>
            Puede escribirnos al WhatsApp para más consultas.</p>

            <h2 className='desayunos'>Nuestros Clientes</h2>

            <div className="image-container">
              <img src="img\sorpresa1.jfif" alt="" />
              <img src="img\sorpresa2.jfif" alt="" />
              <img src="img\sorpresa3.jfif" alt="" />
              <img src="img\sorpresa4.jfif" alt="" />
              <img src="img\sorpresa5.jfif" alt="" />
              <img src="img\sorpresa6.jfif" alt="" />
              <img src="img\sorpresa7.jfif" alt="" />
              <img src="img\sorpresa8.jfif" alt="" />
         
            
      </div>

    </section>

      {/* Botón flotante de WhatsApp con mensaje predeterminado */}
      <Link className="whatsapp-float" to="https://api.whatsapp.com/send?phone=56975688406&text=Hola%21%20Quisiera%20cotizar%20el%20servicio%20de%20desayuno" target="_blank" rel="noopener noreferrer">
        <img className="whatsapp" src="icons\wspp.png" alt="whatsapp"/>
      </Link>

      <Footer />
    </>
  );
}

export default Desayunos;
