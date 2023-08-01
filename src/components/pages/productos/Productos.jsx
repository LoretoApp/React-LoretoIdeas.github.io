import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import BotonesProductos from "./BotonesProductos"
import BannerProductos from "./BannerProductos"
import ContenedorCardProductos from './ContenedorCardProductos'
import Footer from "../Footer/Footer"
import NavBarPage from "../navbar/NavBarPage"


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