import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import BotonesProductos from "./BotonesProductos"
import BannerProductos from "./BannerProductos"
import Footer from "../Footer/Footer"
import NavBarPage from "../navbar/NavBarPage"


function Productos () {
  return (
  <div className="productos productos-fondo">
  <NavBarPage/>
  <BannerProductos/>
  <BotonesProductos/>
  <Footer/>
  </div>
  )
}
export default Productos