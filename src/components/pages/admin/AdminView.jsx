import CrearTartaleta from "./Tartaletas/CrearTartaleta";
import ModificarStatusTartaleta from "./Tartaletas/ModificarStatusTartaleta";
import ModificarFullTartaleta from "./Tartaletas/ModificarFullTartaleta";
import MostrarTartaletas from "./Tartaletas/MostrarTartaletas";
import CrearTorta from "./Tortas/CrearTorta";
import ModificarFullTorta from "./Tortas/ModificarFullTorta";
import ModificarStatusTorta from "./Tortas/ModificarStatusTorta";
import MostrarTorta from "./Tortas/MostrarTorta";
import AdminModal from "./AdminModal";
import { useState } from "react";
import './admin.css'


export default function AdminView() {
  const [verTorta, setVerTorta] = useState(false)
  const [verTartaleta, setVerTartaleta] = useState(false)
  const [verTortaModificar, setVerTortaModificar] = useState(false)
  const [verTartaletaModificar, setVerTartaletaModificar] = useState(false)
  const [verTortaDesactivar, setVerTortaDesactivar] = useState(false)
  const [verTartaletaDesactivar, setVerTartaletaDesactivar] = useState(false)
  const [verTortaAgregar, setVerTortaAgregar] = useState(false)
  const [verTartaletaAgregar, setVerTartaletaAgregar] = useState(false)

  

  /* Modal1 */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /* Modal2 */
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  /* Modal3 */
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  /* Modal4 */
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const mostrarTartaleta = ()=>{
    setVerTartaleta(true)
    setVerTorta(false)
    setVerTortaModificar(false)
    setVerTartaletaModificar(false)
    setVerTortaDesactivar(false)
    setVerTartaletaDesactivar(false)
    setVerTortaAgregar(false)
    setVerTartaletaAgregar(false)
    handleClose()
  }
  const mostrarTorta = ()=>{
    setVerTartaleta(false)
    setVerTorta(true)
    setVerTortaModificar(false)
    setVerTartaletaModificar(false)
    setVerTortaDesactivar(false)
    setVerTartaletaDesactivar(false)
    setVerTortaAgregar(false)
    setVerTartaletaAgregar(false)
    handleClose()
  }
  const agregarTartaleta = ()=>{
    setVerTartaleta(false)
    setVerTorta(false)
    setVerTortaModificar(false)
    setVerTartaletaModificar(false)
    setVerTortaDesactivar(false)
    setVerTartaletaDesactivar(false)
    setVerTortaAgregar(false)
    setVerTartaletaAgregar(true)
    handleClose()
  }
  const agregarTorta = ()=>{
    setVerTartaleta(false)
    setVerTorta(false)
    setVerTortaModificar(false)
    setVerTartaletaModificar(false)
    setVerTortaDesactivar(false)
    setVerTartaletaDesactivar(false)
    setVerTortaAgregar(true)
    setVerTartaletaAgregar(false)
    handleClose()
  }
  const editarTartaleta = ()=>{
    setVerTartaleta(false)
    setVerTorta(false)
    setVerTortaModificar(false)
    setVerTartaletaModificar(true)
    setVerTortaDesactivar(false)
    setVerTartaletaDesactivar(false)
    setVerTortaAgregar(false)
    setVerTartaletaAgregar(false)
    handleClose()
  }
  const editarTorta = ()=>{
    setVerTartaleta(false)
    setVerTorta(false)
    setVerTortaModificar(true)
    setVerTartaletaModificar(false)
    setVerTortaDesactivar(false)
    setVerTartaletaDesactivar(false)
    setVerTortaAgregar(false)
    setVerTartaletaAgregar(false)
    handleClose()
  }
  const desactivarTartaleta = ()=>{
    setVerTartaleta(false)
    setVerTorta(false)
    setVerTortaModificar(false)
    setVerTartaletaModificar(false)
    setVerTortaDesactivar(false)
    setVerTartaletaDesactivar(true)
    setVerTortaAgregar(false)
    setVerTartaletaAgregar(false)
    handleClose()
  }
  const desactivarTorta = ()=>{
    setVerTartaleta(false)
    setVerTorta(false)
    setVerTortaModificar(false)
    setVerTartaletaModificar(false)
    setVerTortaDesactivar(true)
    setVerTartaletaDesactivar(false)
    setVerTortaAgregar(false)
    setVerTartaletaAgregar(false)
    handleClose()
  }




  return (
    <section className='Contenedor-admin-general'>
      {/* Izquierda */}
      <div className="container container-admin">
        {/* Boton 1 */}
        <button className='boton-admin' onClick={handleShow}>
        <div className="box">
          <img className='img-admin' src="icons/add-product.png" alt="Imagen 1" />
          <section className="texto-admin">
            <h3 className='titulo-admin'>Ver Producto</h3>
          </section>
        </div>
        </button>
        <AdminModal show={show} handleClose={handleClose} accion={'Ver Producto'} funcion1={mostrarTorta} funcion2={mostrarTartaleta}/>
        {/* Boton 2 */}
        <button className='boton-admin' onClick={handleShow2}>
        <div className="box">
          <img className='img-admin' src="icons/edit-product.png" alt="Imagen 2" />
          <section className="texto-admin">
            <h3 className='titulo-admin'>Agregar Producto</h3>
          </section>
        </div>
        </button>
        <AdminModal show={show2} handleClose={handleClose2} accion={'Agregar Producto'} funcion1={agregarTorta} funcion2={agregarTartaleta}/>
        {/* Boton 3 */}
        <button className='boton-admin' onClick={handleShow3}>
        <div className="box">
          <img className='img-admin' src="icons/edit-product.png" alt="Imagen 3" />
          <section className="texto-admin">
            <h3 className='titulo-admin'>Editar Producto</h3>
          </section>
        </div>
        </button>
        <AdminModal show={show3} handleClose={handleClose3} accion={'Editar Producto'} funcion1={editarTorta} funcion2={editarTartaleta}/>
        {/* Boton 4 */}
        <button className='boton-admin' onClick={handleShow4}>
        <div className="box">
          <img className='img-admin' src="icons/delete-product.png" alt="Imagen 4" />
          <section className="texto-admin">
            <h3 className='titulo-admin'>Desactivar Producto</h3>
          </section>
        </div>
        </button>
        <AdminModal show={show4} handleClose={handleClose4} accion={'Desactivar Producto'} funcion1={desactivarTorta} funcion2={desactivarTartaleta}/>


      </div>
      {/* Derecha */}
      <div className="funcionesAdmin" id='funcionesAdmin'>
      {verTorta && <MostrarTorta/>}
      {verTartaleta && <MostrarTartaletas/>}
      {verTortaModificar && <ModificarFullTorta/>}
      {verTartaletaModificar && <ModificarFullTartaleta/>}
      {verTortaDesactivar && <ModificarStatusTorta/>}
      {verTartaletaDesactivar && <ModificarStatusTartaleta/>}
      {verTortaAgregar && <CrearTorta/>}
      {verTartaletaAgregar && <CrearTartaleta/>}     
      
    </div>

    </section>
    
  )
}
