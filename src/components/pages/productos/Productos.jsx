import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import BotonesProductos from "./BotonesProductos"
import BannerProductos from "./BannerProductos"
import ContenedorCardProductos from './ContenedorCardProductos'
import NavBarPage from "../Navbar/NavBarPage"
import Footer from "../Footer/Footer"


function Productos () {
  return (
  <>
  <NavBarPage/>
  <BannerProductos/>
  <BotonesProductos/>
  <ContenedorCardProductos/>
  <Footer/>
  </>
  )
}
export default Productos