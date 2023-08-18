
import CarruselNosotros1 from './CarruselNosotros1';
import CarruselNosotros2 from './CarruselNosotros2';
import Footer from '../Footer/Footer';
import NavBarPage from '../navbar/NavBarPage';
import './nosotros.css'

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
        <p className='descripcion'>
          Soy alguien que prepara con amor cada detalle de tu preparación. <br /> Llevo seis años creando cada día nuevas
          preparaciones para mis clientes, siempre priorizando un producto personalizado y de excelente calidad.
        </p>
      </section>

      <div className="separator"></div> 

      <p className='abajo'>Premios y Actividades</p>



    </section>
    <CarruselNosotros2/>
    <Footer/>
    </>
  );
}

export default  Nosotros