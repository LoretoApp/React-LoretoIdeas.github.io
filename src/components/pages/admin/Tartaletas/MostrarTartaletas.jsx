import getTartaletasList from "../../../../controllers/getTartaletasList";
import { useState, useEffect } from "react";
import './mostrarProductos.css'

export default function MostrarTartaletas() {

  /* Llamada de API */
  const [tartaletasList, setTartaletasList] = useState([]);
  const updateTartaletas = async () => {
    const newTartaletasList = await getTartaletasList();
    setTartaletasList(newTartaletasList);
  };
  useEffect(() => {
    updateTartaletas();
  }, []);

  const url = 'img/'

  return (
    <>
      <section className="administrador col-12 text-center">
        <p className="banner-administrador">Administrador</p>
     </section>

    <div className="cuerpo-formulario container-fluid">
      <table className="table table-striped">
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
        {tartaletasList.map((tartaleta) => (
            <tr key={tartaleta._id}>
              <td className="align-middle">{tartaleta.nombre}</td>
              <td className="align-middle">{tartaleta.descripcion}</td>
              <td className="align-middle diametro">{tartaleta.diametro}</td>
              <td className="align-middle">${tartaleta.precio}</td>
              <td className="align-middle">{tartaleta.status}</td>
              <td className="align-middle"><img className="img-tabla" src={url+tartaleta.imagen} alt={tartaleta.img_descripcion} /></td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
    <section className="salir col-12 text-center">
        <p className="banner-administrador">Salir X</p>
    </section>
    </>
  )
}
