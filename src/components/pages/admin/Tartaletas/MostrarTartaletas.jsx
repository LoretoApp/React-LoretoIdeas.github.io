

export default function MostrarTartaletas() {
  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="table-primary">
            <th className="table-primary">Nombre</th>
            <th className="table-primary">Descripcion</th>
            <th className="table-primary">Diametro</th>
            <th className="table-primary">Precio</th>
            <th className="table-primary">estado</th>
            <th className="table-primary">imagen</th>
          </tr>
        </thead>
        <tbody className="table-group-divider" id="contenedor">
        </tbody>
        
      </table>
    </div>
  )
}
