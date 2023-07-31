import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./Navbar.css';
import { Outlet, Link } from "react-router-dom";


function Navbar() {

 useEffect(() => {
  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");
  
  abrir.addEventListener("click", () => {
       nav.classList.add("visible");
   })
  
   cerrar.addEventListener("click", () => {
       nav.classList.remove("visible");
   })
  
  // Aperturas sub menus 
  
   let listElements = document.querySelectorAll('.list__button--click');
   listElements.forEach(listElement =>{
      listElement.addEventListener('click', ()=>{
          listElement.classList.toggle('arrow');
  
          let height=0;
          let menu= listElement.nextElementSibling;
          if (menu.clientHeight == "0"){
              height=menu.scrollHeight;
          }
  
          menu.style.height = `${height}px`;
      })
   })
 }, [])  

  return (
    //Encabezado
    <>
    <header id="encabezado">
      {/* Botón del menú */}
      <div className="d-flex"> 

        <button id="abrir" className="abrir-menu me-auto"><i className="bi bi-list" style={{fontSize: "46px"}}></i></button>

      </div>

      {/* Buscador */}
      <form className="form-check-inline my-2">
          
        <input
        className="form-control mr-sm-2 search-input"
        type="search"
        placeholder="Buscar"
        aria-label="Buscar"
        />

      </form>


      {/* Imagen del usuario */}

      <img className="logo" src="src\assets\icons\Usuario.png" alt="Logo"/>

      <div className="div-con-linea"></div>

      {/* Imagen del Carrito de Compras */}

      <img className="carrito" src="src\assets\icons\carrito.png" alt="carrito"/>

      {/* Menú */}

      <nav className="nav" id="nav">

        {/* Botón para cerrar el menú */}

        <button className="cerrar-menu" id="cerrar"><i className="bi bi-x"></i></button>

        { /* Listado del menú*/ }
        <ul className="nav-list"> 
          <h3>!Bienvenidos!</h3>
          
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
       
          {/* Botón que se despliega  */}
          <li className="list__item list__item--click">
            <div className="list__button list__button--click">
              <img src="" className="list__img"/>
              
              <Link to={"productos"}>Productos</Link>
            </div>

            <ul className="list__show">
              <li className="list__inside">
                <a href="src/components/pages/Productos.jsx" className="nav__link nav__link--inside">Pastelería</a>
              </li>

              <li className="list__inside">
                <a href="#" className="nav__link nav__link--inside">Repostería</a>
              </li>

              <li className="list__inside">
                <a href="#" className="nav__link nav__link--inside">Extras</a>
              </li>
            </ul>
          </li>

          <li><a href="#">Coctelería</a></li>
          <li><a href="#">Desayunos</a></li>
          <li><a href="#">Nosotros</a></li>
        
        </ul>

      </nav>
    </header>
<Outlet/>
    </>

  );
}

export default Navbar;