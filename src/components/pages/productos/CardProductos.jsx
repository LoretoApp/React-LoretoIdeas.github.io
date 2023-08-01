import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'

 
export default function CardProductos() {
  return (
    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-producto">
      <div className="card" >
        <div className="img-container m-3">
          <div className="m-3">
            <img src='img\torta2.jpg' className="card-img-top" alt="torta maracuya"/>
          </div>
          <div className="btn-detalle mb-2">
            <button className="btn detalle card-text">+ Detalle</button>
          </div>
        </div>
        <div className="card-body p-0">
          <div>
            <h5 className="card-title"></h5>
          </div>
          <div className="d-inline">
            <p className="card-text porciones">torta rica</p>
           </div>
          <div className="d-flex text-center align-items-center justify-content-around mt-2 ">
            <p className="card-text precio">$ 8.000</p>
            <a href="#" className="btn boton-agregar align-content-end mb-2">agregar</a>
          </div>
        </div>
      </div>
    </div>
  )
}
