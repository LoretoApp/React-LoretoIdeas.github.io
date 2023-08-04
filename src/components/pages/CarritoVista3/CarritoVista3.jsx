import './CarritoVista3.css'
import NavBarPage from "../Navbar/NavBarPage";
import Footer from "../Footer/Footer";

function CarritoVista3() {
    return (
    <>
     <div className='contenedorprincipal'>
       <div className='volver'>
        <img className='return' src="./src/icons/flecha naranja.png"
        />
       </div>

        <div className='espacio'>
         <div className='container'>
          <p class="inicio">Tu pedido se ha enviado con exito, nos pondremos en contacto
            para coordinar la entrega de tus productos.
            </p>
            <img class="check" src="./assets/icons/check.png"
            />
            <p class="gracias">
            Gracias <br></br>por tu compra !
            </p>
         </div>

        </div>
     </div>
     </>
    )
        



}
export default CarritoVista3;