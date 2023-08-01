
import CarruselNosotros1 from '../../CarruselNosotros1';
import CarruselNosotros2 from '../../CarruselNosotros2';
import Footer from '../Footer/Footer';
import NavBarPage from '../Navbar/NavBarPage';
import './nosotros.css'

 function Nosotros() {
  return (
    <>
    <NavBarPage/>
    <CarruselNosotros1/>
    <section>
      <div className="background">
        <div className="circle">
          <img src="img/foto perfil.jpg" className="img-nosotros" alt="Imagen receptiva" />
        </div>
      </div>

      <section className="text">
        <h1>Repostera</h1>
        <h3>
          Soy alguien que prepara con amor cada detalle de tu preparación. <br /> Llevo seis años creando cada día nuevas
          preparaciones para mis clientes, siempre priorizando un producto personalizado y de excelente calidad.
        </h3>
      </section>

      <section className="divider">
        <div className="divider-image">
          {/* <img src="" alt="" /> */}
        </div>
      </section>

      <section className="text">
        <h1>Premios y actividades</h1>
      </section>
    </section>
    <CarruselNosotros2/>
    <Footer/>
    </>
  );
}

export default  Nosotros