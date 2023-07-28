import "../stylesheets/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function BotonesProductos() {
  return (
  <section className="mt-1 imagen-fondo">
    <div className="container-fluid pt-2 pb-2">
      <div className="row d-flex align-content-center ">
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 btn-ref"><a href="#" className="btn botones">Pasteleria</a></div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 btn-ref"><a href="#" className="btn botones">Reposteria</a></div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 btn-ref"><a href="#" className="btn botones">Extras</a></div>
      </div>
    </div>
  </section>
  )
}
