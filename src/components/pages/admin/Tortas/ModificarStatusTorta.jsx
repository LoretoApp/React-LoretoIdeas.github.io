import { useState, useEffect } from "react";
import getTortasList from "../../../../controllers/getTortasList";
import axios from "axios";

export default function ModificarStatusTorta() {
  /* Llamada de API */
  const [tortasList, setTortasList] = useState([]);
  const updateTortas = async () => {
    const newTortasList = await getTortasList();
    setTortasList(newTortasList);
  };
  useEffect(() => {
    updateTortas();
  }, []);
  /* Selector de valor */
  const [selectedValue, setSelectedValue] = useState("");
  const selectValue = async (e) => {
    setSelectedValue(e.target.value);
  };
  /* Selector de status */
  const [statusValue, setStatusValue] = useState('')
  
  const id = selectedValue

  const enviarDatos = async ()=>{
  
        try {
          await axios.put('https://backendloretoideas.onrender.com/modificar/'+id, {status: statusValue})
        .then((response)=> {
          console.log({
            Origen: "Recibiendo respuesta de la API",
            status: response.status,
            statusText: response.statusText,
            response: response.data,
          });
          if (response.status === 200) {
          alert(`Producto modificado correctamente`);
          } else {
            alert("Error al modificar el producto");
            console.log("no esta recibiendo el status 200")
            response.status(400).json({msg: "error al modificar el producto"})
          }
        })
        .catch(function (error) {
          console.log('algo salio mal al conectarse a la base de datos',error)
        });
        } catch (error) {
          console.log('algo salio mal',error)
          
        }
      
  }

  return (
    <>
    <section className="administrador col-12 text-center">
        <p>Administrador</p>
     </section>

    <div className="cuerpo-formulario container">

      <div className="row">
        <div className="ingreso col-12 text-center">
          <h3>Modificar Estatus Producto</h3>
        </div>
      </div>
      <div className="col">
        <form action="" id="formulario">
          <label htmlFor="selected-id" className="form-label">
            Nombre del producto a modificar:
          </label>
          <select
            className="form-select"
            id="select-id"
            aria-label="Default select example"
            value={selectedValue}
            onChange={selectValue}
          >
            <option value={""}> Seleccione producto para modificar:</option>
            {tortasList.map((torta) => (
              <option key={torta._id} value={torta._id}>
                {torta.nombre} -Estado: {torta.status}
              </option>
            ))}
          </select>
          <label htmlFor="modify-value" className="form-label">
            Ingrese el nuevo valor:
          </label>
          <select
            className="form-select"
            id="modify-value"
            aria-label="Default select example"
            value={statusValue} 
            onChange={(e)=> setStatusValue(e.target.value)} >
            <option value={''}>Nuevo Valor</option>
            <option value="ACTIVO">ACTIVO</option>
            <option value="INACTIVO">INACTIVO</option>
          </select>

          <button type="button" id="button" className="btn btn-primary" onClick={()=> enviarDatos()}>
            Modificar Producto
          </button>
        </form>
        <p id="error"></p>
      </div>
    </div>
    <section className="salir col-12 text-center">
        <p>Salir X</p>
    </section>
    </>
  );
}
