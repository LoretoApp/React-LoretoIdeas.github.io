import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function BannerProductos() {
  return (
  <section className="mt-1 imagen-fondo">
    <div className="container-fluid">
      <div className="row" >
        <div className="col-lg-8 col-md-8 col-sm-8 col-8 d-flex align-items-center justify-content-center p-0">
          <h3 className="titulo-productos">Productos</h3>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0 d-flex justify-content-end">
          <img className="imagen-principal" src="img\img-sinFondo\torta-chocolate-principal.png" alt="Torta de chocolate decorada" />
        </div>
      </div> 
    </div>
  </section>
  )
}
