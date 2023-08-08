import { useState } from "react";
import axios from "axios";

export default function CrearTorta() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [porcion1, setPorcion1] = useState("");
  const [porcion2, setPorcion2] = useState("");
  const [porcion3, setPorcion3] = useState("");
  const [porcion4, setPorcion4] = useState("");
  const [porcion5, setPorcion5] = useState("");
  const [precio1, setPrecio1] = useState("");
  const [precio2, setPrecio2] = useState("");
  const [precio3, setPrecio3] = useState("");
  const [precio4, setPrecio4] = useState("");
  const [precio5, setPrecio5] = useState("");
  const [img_descripcion, setImg_descripcion] = useState("");

  const enviarDatos = async ()=>{
  
    if( 
      nombre === '' ||
      descripcion === '' || 
      porcion1 === '' || 
      precio1 === '' ||
      porcion2 === '' ||
      precio2 === '' ||
      porcion3 === '' ||
      precio3 === '' || 
      porcion4 === '' || 
      precio4 === '' || 
      porcion5 === '' ||
      precio5 === '' ||
      img_descripcion === ''
      ) {
        return alert('todos los campos son requeridos')
      } else {
        const porcionesArray = [porcion1, porcion2, porcion3, porcion4, porcion5];
        const precioArray = [precio1, precio2, precio3, precio4, precio5];

        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('porciones', JSON.stringify(porcionesArray));
        formData.append('precio', JSON.stringify(precioArray));
        formData.append('imagen', document.getElementById('input-imagen').files[0]);
        formData.append('img_descripcion', img_descripcion)
        try {
          await axios.post('https://backendloretoideas.onrender.com/agregartorta', formData, {
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
          setPorcion1('')
          setPorcion2('')
          setPorcion3('')
          setPorcion4('')
          setPorcion5('')
          setPrecio1('')
          setPrecio2('')
          setPrecio3('')
          setPrecio4('')
          setPrecio5('')
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
          alert('la respues no fue success')
        });
        } catch (error) {
          alert('algo salio mal, no desesperes')
          console.log(error)
          
        }
      }
  }


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
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
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
            onChange={(e)=>setDescripcion(e.target.value)}
          />
        </div>

        <div className="row d-flex">
          <div className="col-6">
            <label htmlFor="input-porcion1" className="form-label">
              Porcion 1:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese diametro del producto"
              id="input-porcion1"
              value={porcion1}
              onChange={(e)=>setPorcion1(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="input-precio1" className="form-label">
              Precio 1:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese precio del producto"
              id="input-precio1"
              value={precio1}
              onChange={(e)=>setPrecio1(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="input-porcion2" className="form-label">
              Porcion 2:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese diametro del producto"
              id="input-porcion2"
              value={porcion2}
              onChange={(e)=>setPorcion2(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="input-precio2" className="form-label">
              Precio 2:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese precio del producto"
              id="input-precio2"
              value={precio2}
              onChange={(e)=>setPrecio2(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="input-porcion3" className="form-label">
              Porcion 3:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese diametro del producto"
              id="input-porcion3"
              value={porcion3}
              onChange={(e)=>setPorcion3(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="input-precio3" className="form-label">
              Precio 3:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese precio del producto"
              id="input-precio3"
              value={precio3}
              onChange={(e)=>setPrecio3(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="input-porcion4" className="form-label">
              Porcion 4:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese diametro del producto"
              id="input-porcion4"
              value={porcion4}
              onChange={(e)=>setPorcion4(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="input-precio4" className="form-label">
              Precio 4:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese precio del producto"
              id="input-precio4"
              value={precio4}
              onChange={(e)=>setPrecio4(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="input-porcion5" className="form-label">
              Porcion 5:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese diametro del producto"
              id="input-porcion5"
              value={porcion5}
              onChange={(e)=>setPorcion5(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="input-precio5" className="form-label">
              Precio 5:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese precio del producto"
              id="input-precio5"
              value={precio5}
              onChange={(e)=>setPrecio5(e.target.value)}
            />
          </div>
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
            onChange={(e)=>setImg_descripcion(e.target.value)}
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