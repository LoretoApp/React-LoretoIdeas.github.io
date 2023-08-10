import 'bootstrap/dist/css/bootstrap.min.css';
import'./Footer.css';


function Footer(){
    return(
    //    Footer
    <footer id="Footer" >
        {/* Contenedor de los elementos flex 1 y 2 */}
        <div className='container'>
            <div className='row'>
                <div className='contacto col'>
                  <p>CONTACTO: <br></br>
                    Fono: +56 932939888 <br></br>
                    E-mail: loreto.ideas.reposteria@gmail.com</p>
                </div>
                {/* Elemento 2 de la izquierda que contiene los logos (responsivo) */}
                <div className='iconos col'>
                  <img class="instagram" src="icons\instagram.png" alt="instagram"/>
                  <img class="facebook" src="icons\Facebook.png" alt="facebook"/>
                  <img className="sercotec" src="icons\sercotec(2).jpg" alt="sercotec"/>
                </div>
            </div>
            <div className='row'>
            {/* !--Texto inferior de los derechos reservado */}
           </div>
            <div className='text-center mt-4'>
                <p className='derechos'>Loreto Ideas 2023® | Todos los derechos reservados</p>
            </div>
        </div>

    </footer>

    )
}

export default Footer;