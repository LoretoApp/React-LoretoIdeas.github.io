
import './nosotros.css'

export default function Nosotros() {
  return (
    <section>
      <div className="background">
        <div className="circle">
          <img src="src/assets/img/foto perfil.jpg" className="img-circle" alt="Imagen receptiva" />
        </div>
      </div>

      <section className="text">
        <h1>Repostera</h1>
        <h3>
          Soy alguien que prepara con amor cada detalle de tu preparación. <br /> Llevo seis años creando cada día nuevas
          preparaciones para mis clientes, siempre priorizando un producto personalizado y de excelente calidad.
        </h3>
      </section>

      <section className="divider">
        <div className="divider-image">
          <img src="src/assets/img/LINEA-AMARILLA.png" alt="Línea amarilla" />
        </div>
      </section>

      <section className="text">
        <h1>Premios y actividades</h1>
        {/* Aquí puedes agregar información sobre los premios y actividades */}
      </section>
    </section>
  );
}
