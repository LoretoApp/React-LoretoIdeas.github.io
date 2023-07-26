import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./Navbar.css';
import './Navbar.js';


function Navbar() {
  return (
    //Encabezado
    <header id="encabezado">
      {/* Botón del menú */}
      <div className="d-flex"> 

        <button id="abrir" className="abrir-menu me-auto"><i className="bi bi-list" style="font-size: 46px;"></i></button>

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
          <li><a href="#">Inicio</a></li>

          {/* Botón que se despliega  */}
          <li className="list__item list__item--click">
            <div className="list__button list__button--click">
              <img src="" className="list__img"/>
              <a href="#" className="nav__link">Productos</a>
              <img src="src\assets\icons\right-arrow.png" className="list__arrow"/>
            </div>

            <ul className="list__show">
              <li className="list__inside">
                <a href="#" className="nav__link nav__link--inside">Pastelería</a>
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
  );
}

export default Navbar;