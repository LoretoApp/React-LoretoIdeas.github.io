import "../productos/productos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import getTortasList from "../../../controllers/getTortasList";
import { useEffect, useState } from "react";
import CardProductos from "./CardTortas";
import getTartaletasList from "../../../controllers/getTartaletasList";
import CardTartaleta from "./CardTartaleta";

export default function BotonesProductos() {
  const [tortasList, setTortasList] = useState([]);
  const [tartaletasList, setTartaletasList] = useState([]);

  const updateTortas = async () => {
    const newTortasList = await getTortasList();
    setTortasList(newTortasList);
  };
  const updateTartaletas = async () => {
    const newTartaletasList = await getTartaletasList();
    setTartaletasList(newTartaletasList);
  };

  useEffect(() => {
    updateTortas();
    updateTartaletas();
  }, []);

  return (
    <>
      <section className="mt-1 imagen-fondo">
        <div className="container-fluid pt-2 pb-2">
          <div className="row d-flex align-content-center ">
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 btn-ref">
              <button
                href="#"
                onClick={() => updateTortas() && setTartaletasList([])}
                className="btn botones"
              >
                Tortas
              </button>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 btn-ref">
              <button
                href="#"
                onClick={() => updateTartaletas() && setTortasList([])}
                className="btn botones"
              >
                Tartaletas
              </button>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 btn-ref">
              <button href="#" className="btn botones">
                Extras
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mt-1 d-flex " id="contenedor-card">
            {tortasList.filter(torta=> torta.status === 'ACTIVO').map((torta) => (
              <CardProductos
                key={torta._id}
                nombre={torta.nombre}
                precio={JSON.parse(torta.precio)}
                porciones={JSON.parse(torta.porciones)}
                imagen={torta.imagen}
                img_descripcion={torta.img_descripcion}
                descripcion={torta.descripcion}
              />
            ))}
            {tartaletasList.filter(tartaleta=> tartaleta.status === 'ACTIVO').map((tartaleta) => (
              <CardTartaleta
                key={tartaleta._id}
                nombre={tartaleta.nombre}
                descripcion={tartaleta.descripcion}
                precio={tartaleta.precio}
                diametro={tartaleta.diametro}
                imagen={tartaleta.imagen}
                img_descripcion={tartaleta.img_descripcion}
                
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
