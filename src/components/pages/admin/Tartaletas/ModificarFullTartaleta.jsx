import { useState, useEffect } from "react";
import getTartaletasList from "../../../../controllers/getTartaletasList";
import axios from "axios";

export default function ModificarFullTartaleta() {
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
  const selectValue = async (e) => {
    setSelectedValue(e.target.value);
    /* crear controlador para buscar uno y poder completar los datos en el formulario */
  };
  /* recoleccion de datos */
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [diametro, setDiametro] = useState("");
  const [precio, setPrecio] = useState("");
  const [img_descripcion, setImg_descripcion] = useState("");
  const id = selectedValue
  

  const enviarDatos = async ()=>{
  
    if( 
      nombre === '' ||
      descripcion === '' || 
      diametro === '' || 
      precio === '' ||
      img_descripcion === ''
      ) {
        return  alert('todos los campos son requeridos')
      } else {
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('diametro', diametro);
        formData.append('precio', precio);
        formData.append('imagen', document.getElementById('input-imagen').files[0]);
        formData.append('img_descripcion', img_descripcion)
        try {
          await axios.put('https://backendloretoideas.onrender.com/tartaleta/modificartartaletafull/'+id, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }})
        .then((response)=> {
          console.log({
            Origen: "Recibiendo respuesta de la API",
            status: response.status,
            statusText: response.statusText,
            response: response.data,
          });
          if (response.status === 200) {
          alert(`Producto ${nombre} modificado correctamente`);
          setNombre('')
          setDescripcion('')
          setDiametro('')
          setPrecio('')
          setImg_descripcion('')
          document.getElementById('input-imagen').value = null
          } else {
            alert("Error al modificar el producto");
            console.log("no esta recibiendo el status 200")
            response.status(400).json({msg: "error al modificar el producto"})
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        } catch (error) {
          console.log('algo salio mal',error)
          
        }
      }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Modificar Producto</h1>
        </div>
      </div>
      <form className="row g-3" id="formulario" encType="multipart/form-data">
        <p id="error-datos" className="text-danger"></p>
        <label htmlFor="selected-id" className="form-label">
          Nombre del producto a modificar
        </label>
        <select
          className="form-select"
          id="select-id"
          aria-label="Default select example"
          value={selectedValue} 
          onChange={selectValue} 
        >
          <option value={''}>
            Seleccione producto para modificar
          </option>
          {tartaletasList.map((tartaleta) => (
            <option key={tartaleta._id} value={tartaleta._id}>
              {tartaleta.nombre} -Estado: {tartaleta.status}
            </option>
          ))}
        </select>
        <div className="col-12">
          <label htmlFor="input-nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese nombre del producto"
            id="input-nombre"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
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
            value={descripcion}
            onChange={(e)=> setDescripcion(e.target.value)}
          />
        </div>
        <div className="col-6">
          <label htmlFor="input-diametro" className="form-label">
            Diametro:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese porciones del producto"
            id="input-diametro"
            value={diametro}
            onChange={(e)=> setDiametro(e.target.value)}
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
            value={precio}
            onChange={(e)=> setPrecio(e.target.value)}
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
            value={img_descripcion}
            onChange={(e)=> setImg_descripcion(e.target.value)}
          />
        </div>
        <div className="col-12">
          <button type="button" id="button" className="btn btn-primary" onClick={()=> enviarDatos()}>
            Agregar Producto
          </button>
        </div>
      </form>
    </div>
  );
}
