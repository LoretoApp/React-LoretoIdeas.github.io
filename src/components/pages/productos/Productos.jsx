import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import BotonesProductos from "./BotonesProductos"
import BannerProductos from "./BannerProductos"
import Footer from "../Footer/Footer"
import NavBarPage from "../navbar/NavBarPage"


function Productos () {
  return (
  <div className="productos">

  <a className="whatsapp-float" href="https://api.whatsapp.com/send?phone=56975688406&text=Hola%21%20Quisiera%20consultar%20por%20un%20producto"
 target="_blank" rel="noopener noreferrer">
    <img className="whatsapp" src="icons\wspp.png" alt="whatsapp"/>
  </a>

  <NavBarPage/>
  <BannerProductos/>
  <BotonesProductos/>
  <Footer/>
  </div>
  
  
  )
  
}

export default Productos