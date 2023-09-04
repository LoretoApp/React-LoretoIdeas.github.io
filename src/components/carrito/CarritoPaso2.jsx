import { useState } from 'react';
import './stylecarrito.css'
import { Link } from "react-router-dom"

function CarritoP2({data}) {
  const [formData, setFormData] = useState({
    nombre2: '',
    apellido: '',
    direccion: '',
    comuna: '',
    fechaEntrega: '',
    telefono: '',
    correo: ''
  });

  const { nombre2, direccion, comuna, fechaEntrega, telefono,correo} = formData
  const {nombre, diametro, precio} = data
  const saludo= "Hola Loreto Ideas!"
  const saludo2= "Quisiera realizar el siguiente pedido:"
  const pedido= `${nombre} de ${diametro} de precio: $ ${precio}`
  const entrega= `Agendado para el día: ${fechaEntrega}`
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí Realizar acción con los datos del formulario
    console.log(formData);
  };

  return (
    
        <div className="cart-header t2">
          <div className='mitad-arriba-modal'>
            <img src="icons/Logo-loretoideas.png" alt="loretoideas" className='logo-loretoideas-pedido' />
            <p className="agradecimiento-pedido"> Gracias por su Preferencia !</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre" className='etiqueta-agendar'>Nombre y Apellido</label>
              <input
                type="text"
                className="form-control"
                id="nombre2"
                name="nombre2"
                value={formData.nombre2}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccion" className='etiqueta-agendar'>Dirección de Calle</label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comuna" className='etiqueta-agendar'>Comuna</label>
              <input
                type="text"
                className="form-control"
                id="comuna"
                name="comuna"
                value={formData.comuna}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fechaEntrega" className='etiqueta-agendar'>Fecha de Entrega</label>
              <input
                type="date"
                className="form-control"
                id="fechaEntrega"
                name="fechaEntrega"
                value={formData.fechaEntrega}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono" className='etiqueta-agendar'>Teléfono</label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="correo" className='etiqueta-agendar'>Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn boton-agendar-carrito">
            <Link
              className="btn boton-agendar-carrito align-content-end"
              to={`https://api.whatsapp.com/send?phone=56975688406&text=${saludo}%0A${saludo2}%0A%0A${pedido}%0A%0A${entrega}%0AMis%20datos%20de%20contacto%20son:%0ANombre:%20${nombre2}%0Acelular:%20${telefono}%0AEmail:%20${correo}%0ADirección:%20${direccion},%20${comuna}%0A`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Realizar Pedido
            </Link>
            <img src="icons/whatsapp.png" alt="wsp" className='wsp-img-pedido'/>
            </button>
          </form>
            
        </div>
  
  );
}

export default CarritoP2;
