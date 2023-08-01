import "../productos/productos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import getTortasList from "../../../controllers/getTortasList";
import { useEffect, useState } from "react";
import CardProductos from "../productos/CardProductos";


export default function ContenedorCardProductos() {
  const [tortasList, setTortasList] = useState([]);

  const updateTortas = async () => {
    const newTortasList = await getTortasList();
    setTortasList(newTortasList);
  };
  
  useEffect(() => {
    updateTortas();
  }, []);

  return (
    <section>
      <div className="container-fluid">
        <div className="row mt-1 d-flex" id="contenedor-card">
          
        {tortasList.map((torta) => (
            <CardProductos 
            key={torta._id} 
            nombre={torta.nombre}
            precio={JSON.parse(torta.precio[0])}
            porciones={JSON.parse(torta.porciones)}
            imagen={torta.imagen}
            img_descripcion={torta.img_descripcion}

            />
          ))}
          
        
        </div>
      </div>
    </section>
  );
}
