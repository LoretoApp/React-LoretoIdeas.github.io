import Footer from '../Footer/Footer';
import NavBarPage from '../navbar/NavBarPage';
import CarruselDesayunos from './CarruselDesayunos';
import './desayunos.css';
import { Link } from "react-router-dom"


function Desayunos() {
  return (
    <>
      <NavBarPage />
      <section className='pasteles'>
<img id="imgMozos" src="img\cocteleriaybanqueteria.png" alt="img\cocteleriaybanqueteria.png" />
          <h2 className='desayunos'>Desayunos</h2>

          <p className='parrafoDesayunos'>Damos servicios de desayunos sorpresa para distintos eventos privados o familiares.<br/>
            Se pueden crear menús salados, dulces o mixtos, según lo que necesite el cliente.<br/>
            Se debe hacer la solicitud con al menos 10 días de anticipación.
            Puede escribirnos al WhatsApp para más consultas.</p>
            <p className="desayunos">Estos son nuestros servicios</p>

            <div className="image-container">
              <img src="" alt="img\cocteleriaybanqueteria.png" />
              <img src="" alt="img\cocteleriaybanqueteria.png" />
              <img src="" alt="img\cocteleriaybanqueteria.png" />
              <img src="" alt="img\cocteleriaybanqueteria.png" />
              <img src="" alt="img\cocteleriaybanqueteria.png" />
              <img src="" alt="img\cocteleriaybanqueteria.png" />
              <img src="" alt="img\cocteleriaybanqueteria.png" />
              <img src="" alt="img\cocteleriaybanqueteria.png" />
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
