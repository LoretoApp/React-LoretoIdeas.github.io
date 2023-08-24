
import CarruselNosotros1 from './CarruselNosotros1';
import CarruselNosotros2 from './CarruselNosotros2';
import Footer from '../Footer/Footer';
import NavBarPage from '../navbar/NavBarPage';
import './nosotros.css'
import { Link } from "react-router-dom"


 function Nosotros() {
  return (
    <>
    <NavBarPage/>
    <CarruselNosotros1/>
    <section className='pasteles'>
      <div className="background">
        <div className="circle borde">
          <img src="img/foto perfil.jpg" className="img-nosotros" alt="Imagen receptiva" />
        </div>

      </div>

      <section className="text">
        <p className='repostera'>Repostera</p>
        <p className='descripcionNosotros'>
          Soy alguien que prepara con amor cada detalle de tu preparación. <br /> Llevo seis años creando cada día nuevas
          preparaciones para mis clientes, siempre priorizando un producto personalizado y de excelente calidad.
        </p>
      </section>

      <div className="separator"></div> 

      <p className='abajo'>Premios y Actividades</p>



    </section>
    <Link className="whatsapp-float" to="https://api.whatsapp.com/send?phone=56975688406&text=Hola%21%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20de%20Loreto%20Ideas" target="_blank" rel="noopener noreferrer">
    <img className="whatsapp" src="icons\wspp.png" alt="whatsapp"/>
  </Link>
    <CarruselNosotros2/>
    <Footer/>
    </>
  );
}

export default  Nosotros