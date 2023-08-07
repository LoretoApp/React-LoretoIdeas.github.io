export default function AdminCrearTartaleta() {


  
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
          <label htmlFor="input-nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese nombre del producto"
            id="input-nombre"
          />
        </div>
        <div className="col-12">
          <label htmlFor="input-descripcion" className="form-label">
            Descripcion
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese descripcion del producto"
            id="input-descripcion"
          />
        </div>
        <div className="col-6">
          <label htmlFor="input-diametro" className="form-label">
            Diametro:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese diametro del producto. 22 centimetros..."
            id="input-diametro"
          />
        </div>
        <div className="col-6">
          <label htmlFor="input-precio" className="form-label">
            Precio:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese precio del producto"
            id="input-precio"
          />
        </div>
        <div className="col-12">
          <label htmlFor="input-imagen" className="form-label">
            Imagen
          </label>
          <input
            type="file"
            className="form-control"
            placeholder="Ingrese url de la imagen"
            id="input-imagen"
            name="imagen"
          />
        </div>
        <div className="col-12">
          <label htmlFor="input-descripcion-img" className="form-label">
            Descripcion de imagen
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese descripcion de la imagen"
            id="input-descripcion-img"
          />
        </div>
        <div className="col-12">
          <button type="submit" id="button" className="btn btn-primary">
            Agregar Producto
          </button>
        </div>
      </form>
    </div>
  );
}
