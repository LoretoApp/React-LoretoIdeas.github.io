import "../stylesheets/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import CardProductos from "./CardProductos"

export default function ContenedorCardProductos() {
  return (
  <section>
    <div className="container-fluid">
      <div className="row mt-1" id="contenedor-card">
        <>
        <CardProductos/>
        <CardProductos/>
        <CardProductos/>
        <CardProductos/>
        </>
      </div>
    </div>
  </section>
  )
}
