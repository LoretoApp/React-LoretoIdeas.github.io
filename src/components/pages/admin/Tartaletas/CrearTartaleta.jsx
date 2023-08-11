import { useState } from "react";
import axios from "axios";
import './CrearTartaleta.css';




export default function CrearTartaleta() {

const [nombre,setNombre]=useState('')
const [descripcion,setDescripcion]=useState('')
const [diametro,setDiametro]=useState('')
const [precio,setPrecio]=useState('')
const [img_descripcion,setImg_descripcion]=useState('')

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
        await axios.post('https://backendloretoideas.onrender.com/tartaleta/agregartartaleta', formData, {
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
        alert(`Producto ${nombre} creado correctamente`);
        setNombre('')
        setDescripcion('')
        setDiametro('')
        setPrecio('')
        setImg_descripcion('')
        document.getElementById('input-imagen').value = null
        } else {
          alert("Error al crear el producto");
          console.log("no esta recibiendo el status 200")
          response.status(400).json({msg: "error al crear el producto"})
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      } catch (error) {
        console.log(error)
        
      }
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
          <h3 className="titulo">Ingreso de producto</h3>
        </div>
      </div>
      <form className="titulo-admi row g-3" id="formulario-admi" encType="multipart/form-data">
        <p id="error-datos" className="text-danger"></p>
        <div className="col-12">
          <label htmlFor="input-nombre" className="form-label">
            Nombre:
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
            Descripcion:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese descripcion del producto"
            id="input-descripcion"
            value={descripcion}
            onChange={(e=> setDescripcion(e.target.value))}
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
            Imagen:
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
            Descripcion de imagen:
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
          <button type="button" id="agregar" className="boton-agregar btn btn-primary" onClick={()=> enviarDatos()}>
            Agregar Producto
          </button>
        </div>
      </form>

    </div>
    <section className="salir col-12 text-center">
        <p className="banner-administrador">Salir X</p>
    </section>

    </>
  );
}
