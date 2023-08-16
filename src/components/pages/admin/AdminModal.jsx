

export default function AdminModal(accion) {
  return (
    <div className="modal-dialog modal-dialog-centered">
      <div>
        <h3>Elige que quieres {accion}</h3>
        <button className='btn boton-torta-modal'>
          <h4 className='titulo-boton-modal'>Torta</h4>
          <img src="img/torta2.jpg" alt="torta de fresa" />
        </button>
        <button className='btn boton-tartaleta-modal'>
          <h4 className='titulo-boton-modal'>Tartaleta</h4>
          <img src="img/kuchen-frutosrojos.png" alt="torta de fresa" />
        </button>
      </div>
    </div>
  )
}
