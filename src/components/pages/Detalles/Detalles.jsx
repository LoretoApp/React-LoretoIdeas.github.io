import 'bootstrap/dist/css/bootstrap.min.css';
import'./Detalles.css';

function Detalles(){
    return(
     <>
          <div className="mitad-arriba">
            <a href='/'>
            <img class="flecha" src="icons/flecha naranja.png" alt='flecha'
            />
            </a>

            <a href='/'>
            <img class="kuchen" src="img/img-sinFondo/kuchen.png" alt='kuchen'
            />
            </a>

            <div className="contenedor">
                <div className="izquierda"> 
                    Medidas
                    <div className='medidas'>S M L</div>
                    Disponible: 06

                </div>
                <div className='derecha'>
                    <a href='/'>
                    <img class="corazon" src="icons/Me-gusta.png" alt='corazon'
                    /> 
                    </a>
                    <br></br>

                    $7.990
                </div>
            </div>
        </div>

        <div className="mitad-abajo">
            <p className="titulo"> Kuchen Mora </p>
            Masa de migas con fruta de mora y mermeladas.

            <div className="medidas-productos">
                <ul>
                    <li>Medidas</li>
                    <li>S= 8 personas.</li>
                    <li>M= 10 personas.</li>
                    <li>L= 12 personas.</li>
                </ul>
            </div>
            <div className="agregar">
                <a href='/'>
                Agregar
                </a>
                <img class="carrito" src="icons/carrito.png" alt='carrito'
                />
            </div>
        </div>
     </>
    )
}

export default Detalles;