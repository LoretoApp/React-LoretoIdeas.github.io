import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import BotonesProductos from "./BotonesProductos"
import BannerProductos from "./BannerProductos"
import ContenedorCardProductos from './ContenedorCardProductos'
import NavBarPage from "../Navbar/NavBarPage"


function Productos () {
  return (
  <>
  <NavBarPage/>
  <BannerProductos/>
  <BotonesProductos/>
  <ContenedorCardProductos/>
  </>
  )
}
export default Productos