

export default function AdminCrearTorta() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 text-center">
              <h1>Ingreso de producto</h1>
            </div>
        </div>
        <form className="row g-3" id="formulario" encType="multipart/form-data">
            <p id="error-datos" className="text-danger"></p>
            <div className="col-12">
                <label htmlFor="input-nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" placeholder="Ingrese nombre del producto" id="input-nombre"/>
            </div>
            <div className="col-12">
              <label htmlFor="input-descripcion" className="form-label">Descripcion</label>
              <input type="text" className="form-control" placeholder="Ingrese descripcion del producto" id="input-descripcion"/>
            </div>

            <div className="row d-flex">

              <div className="col-6">
                <label htmlFor="input-porcion1" className="form-label">Porcion 1:</label>
                <input type="text" className="form-control" placeholder="Ingrese diametro del producto" id="input-porcion1"/>
              </div>
              <div className="col-6">
                <label htmlFor="input-precio1" className="form-label">Precio 1:</label>
                <input type="text" className="form-control" placeholder="Ingrese precio del producto" id="input-precio1"/>
              </div>
              <div className="col-6">
                <label htmlFor="input-porcion2" className="form-label">Porcion 2:</label>
                <input type="text" className="form-control" placeholder="Ingrese diametro del producto" id="input-porcion2"/>
              </div>
              <div className="col-6">
                <label htmlFor="input-precio2" className="form-label">Precio 2:</label>
                <input type="text" className="form-control" placeholder="Ingrese precio del producto" id="input-precio2"/>
              </div>
              <div className="col-6">
                <label htmlFor="input-porcion3" className="form-label">Porcion 3:</label>
                <input type="text" className="form-control" placeholder="Ingrese diametro del producto" id="input-porcion3"/>
              </div>
              <div className="col-6">
                <label htmlFor="input-precio3" className="form-label">Precio 3:</label>
                <input type="text" className="form-control" placeholder="Ingrese precio del producto" id="input-precio3"/>
              </div>
              <div className="col-6">
                <label htmlFor="input-porcion4" className="form-label">Porcion 4:</label>
                <input type="text" className="form-control" placeholder="Ingrese diametro del producto" id="input-porcion4"/>
              </div>
              <div className="col-6">
                <label htmlFor="input-precio4" className="form-label">Precio 4:</label>
                <input type="text" className="form-control" placeholder="Ingrese precio del producto" id="input-precio4"/>
              </div>
              <div className="col-6">
                <label htmlFor="input-porcion5" className="form-label">Porcion 5:</label>
                <input type="text" className="form-control" placeholder="Ingrese diametro del producto" id="input-porcion5"/>
              </div>
              <div className="col-6">
                <label htmlFor="input-precio5" className="form-label">Precio 5:</label>
                <input type="text" className="form-control" placeholder="Ingrese precio del producto" id="input-precio5"/>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="input-imagen" className="form-label">Imagen</label>
              <input type="file" className="form-control" placeholder="Ingrese url de la imagen" id="input-imagen" name="imagen"/>
            </div>
            <div className="col-12">
              <label htmlFor="input-descripcion-img" className="form-label">Descripcion de imagen</label>
              <input type="text" className="form-control" placeholder="Ingrese descripcion de la imagen" id="input-descripcion-img"/>
            </div>
            <div className="col-12">
                <button type="submit" id="button" className="btn btn-primary" >Agregar Producto</button>
            </div>
        </form>
    </div>
  )
}
