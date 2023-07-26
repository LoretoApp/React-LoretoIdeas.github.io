import "../../stylesheets/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import BotonesProductos from "../BotonesProductos"
import BannerProductos from "../BannerProductos"
import ContenedorCardProductos from '../ContenedorCardProductos'


function Productos () {
  return (
  <>
  <BannerProductos/>
  <BotonesProductos/>
  <ContenedorCardProductos/>
  </>
  )
}
export default Productos