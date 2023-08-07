

export default function ModificarStatusTartaleta() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Modificar Producto</h1>
        </div>
      </div>
      <div className="col">
        <form action="">
          <label htmlFor="selected-id" className="form-label">
            Nombre del producto a modificar
            </label>
          <select
            className="form-select"
            id="select-id"
            aria-label="Default select example">
            <option selected> Nombre</option>
            
          </select>
          <label htmlFor="selected-id" className="form-label">
            Parametro a modificar
            </label>
          <select
            className="form-select"
            id="modify"
            aria-label="Default select example">
            <option value="status" selected>Estado</option>
          </select>
          
          <label htmlFor="modify-value" className="form-label">
            Ingrese el nuevo valor
          </label>
          <select
            className="form-select"
            id="modify-value"
            aria-label="Default select example">
            <option selected>Nuevo Valor</option>
            <option value="ACTIVO">ACTIVO</option>
            <option value="INACTIVO">INACTIVO</option>
          </select>

          <button type="button" className="btn btn-primary" >Modificar Producto</button>
        </form>
        <p id="error"></p>
      </div>
    </div>
  )
}
