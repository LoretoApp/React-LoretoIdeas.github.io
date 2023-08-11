
import PasosCarrito from './PasosCarrito';
import ElementoCarrito from './ElementoCarrito';
import ResumenCarrito from './ResumenCarrito';


function Carrito() {
    return (
        <>
        <PasosCarrito/>
        <div className="contenedor-carrito">
         <div className="cart-container">
           <div className="cart-header">
           <h2 className="title-left">Pedido</h2>
           <button className="btn btn-transparent btn-delete">Eliminar todo</button>
        </div>
        <ElementoCarrito/>
        <ResumenCarrito/>
         </div>
        </div>
        </>
        )
}

export default Carrito;