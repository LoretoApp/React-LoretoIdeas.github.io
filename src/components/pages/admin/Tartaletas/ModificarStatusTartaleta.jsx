import { useState, useEffect } from "react";
import getTartaletasList from "../../../../controllers/getTartaletasList";
import axios from "axios";
import './ModificarStatusTartaleta.css';

export default function ModificarStatusTartaleta() {
  /* Llamada de API */
  const [tartaletasList, setTartaletasList] = useState([]);
  const updateTartaletas = async () => {
    const newTartaletasList = await getTartaletasList();
    setTartaletasList(newTartaletasList);
  };
  useEffect(() => {
    updateTartaletas();
  }, []);
  /* Selector de valor */
  const [selectedValue, setSelectedValue] = useState("");
  const selectValue = (e) => {
    setSelectedValue(e.target.value);
  };
  const [statusValue, setStatusValue] = useState('')

  const selectStatusValue = (e)=> {
    setStatusValue(e.target.value)
  }
  const id = selectedValue

  const enviarDatos = async ()=>{
    try {
      await axios.put('https://backendloretoideas.onrender.com/tartaleta/modificartartaleta/'+id, {status: statusValue})
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
        console.log(error);
        });} 
    catch (error) {
      console.log('algo salio mal',error)     
    }  
  }

  return (
    <>
    <section className="administrador col-12 text-center">
        <p className="banner-administrador">Administrador</p>
     </section>

    <div className="cuerpo-formulario container">

      <div className="titulo-admi row">
        <div className="ingreso col-12 text-center">
          <h3 className="titulo">Modificar Estatus Producto</h3>
        </div>
      </div>
      <div className="col">
        <form action=""id="formulario-admi" >
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
          <option value={''}>
            Seleccione producto para modificar:
          </option>
          {tartaletasList.map((tartaleta) => (
            <option key={tartaleta._id} value={tartaleta._id}>
              {tartaleta.nombre} -Estado: {tartaleta.status}
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
            onChange={selectStatusValue} >
            <option value={''}>Nuevo Valor</option>
            <option value="ACTIVO">ACTIVO</option>
            <option value="INACTIVO">INACTIVO</option>
          </select>

          <button type="button" id="agregar" className="boton-agregar btn btn-primary" onClick={()=> enviarDatos()}>Modificar Producto</button>
        </form>
        <p id="error"></p>
      </div>
    </div>

    <section className="salir col-12 text-center">
        <p className="banner-administrador">Salir X</p>
    </section>
    </>
  )
}
