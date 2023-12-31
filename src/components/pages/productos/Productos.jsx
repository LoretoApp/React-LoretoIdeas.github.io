import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import BotonesProductos from "./BotonesProductos"
import BannerProductos from "./BannerProductos"
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"
import NavBarPage from "../Navbar/NavBarPage"


function Productos () {
  return (
  <div className="productos productos-fondo">

  <Link className="whatsapp-float" to="https://api.whatsapp.com/send?phone=56932939888&text=Hola%21%20Quisiera%20consultar%20por%20un%20producto"
 target="_blank" rel="noopener noreferrer">
    <img className="whatsapp" src="icons\wspp.png" alt="whatsapp"/>
  </Link>

  <NavBarPage/>
  <BannerProductos/>
  <BotonesProductos/>
  <Footer/>
  </div>
  
  
  )
  
}

export default Productos