import Footer from "../Footer/Footer"
import NavBarPage from "../navbar/NavBarPage"


function Desayunos() {
  return (
    <>
    <NavBarPage/>
    <section>
      <div className="container-fluid text-center1 fondo">
        <div className="container-fluid">
          <h1>Desayunos Sorpresas a Domicilio</h1>
          <h3>Damos servicios de banquetería para distintos eventos privados o familiares.<br/>
            Se pueden crear menús salados, dulces o mixtos, según lo que necesite el cliente.<br/>
            Se debe hacer la solicitud con al menos 10 días de anticipación.<br/>
            Puede escribirnos al WhatsApp para más consultas.</h3>
          </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}
export default Desayunos