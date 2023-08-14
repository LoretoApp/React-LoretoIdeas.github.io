import "./Stylecarrito.css/";
import PasosCarrito from './PasosCarrito';
import ElementoCarrito from './ElementoCarrito';
import ResumenCarrito from './ResumenCarrito';
import Footer from '../pages/Footer/Footer';

function Carrito() {
    return (
        <>
        <PasosCarrito/>
        <div className="contenedor-carrito">
         <div className="cart-contenedor">
           <div className="cart-header">
           <h2 className="title-left">Pedido</h2>
           <button className="btn btn-transparent btn-delete">Eliminar todo</button>
        </div>
        <ElementoCarrito/>
        <ResumenCarrito/>
         </div>
        </div>
        <Footer/>
        </>
        )
}

export default Carrito;