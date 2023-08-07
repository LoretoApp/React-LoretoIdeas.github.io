import Footer from "../Footer/Footer"
import NavBarPage from "../navbar/NavBarPage"
import CarruselDesayunos from "./CarruselDesayunos"



function Desayunos() {
  return (
    <>
    <NavBarPage/>
    <CarruselDesayunos/>
    <section id = "fondo">
      <div className="container-fluid text-center1 fondo">
        <div className="container-fluid">
          <p className="titulo">Desayunos</p>
          <p className="parrafo">Damos servicios de banquetería para distintos eventos privados o familiares.<br/>
            Se pueden crear menús salados, dulces o mixtos, según lo que necesite el cliente.<br/>
            Se debe hacer la solicitud con al menos 10 días de anticipación.<br/>
            Puede escribirnos al WhatsApp para más consultas.</p>
          </div>
      </div>
      
    </section>
    <Footer/>
    </>
  )
}
export default Desayunos