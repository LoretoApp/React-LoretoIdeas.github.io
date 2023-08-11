import React, { useState } from 'react';
import '../login/styles.css';

function AppLogin() {
    const [view, setView] = useState('login');
  
    const handleSignup = () => {
      setView('signup');
    };
  
    const handleLogin = () => {
      setView('login');
    };
  
    return (
      <div className="superContainer">
        <div className="containerLogin">
          {view === 'login' ? (
            <div className="sideA">
              <h1>Inicio de Sesión</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Contraseña" />
              <a href="#forgot-password">Recupera tu contraseña</a>
              <button>Registrarse</button>
            </div>
          ) : (
            <div className="sideA">
              <h1 className='LoginTitle'>Nos alegra verte</h1>
              <p>Inicia Sesión para que puedas ver tus productos favoritos.</p>
              <button onClick={handleLogin}>Entrar</button>
            </div>
          )}
          <div className="sideB">
            {view === 'login' ? (
              <div>
                <h1>Crear cuenta</h1>
                <p>Crea una cuenta para que puedas guardar tus pedidos y disfrutar.</p>
                <button onClick={handleSignup}>Registrate</button>
              </div>
            ) : (
              <div className="sideB--header">
                <h1>Crear cuenta</h1>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Contraseña" />
                <button>Registrate</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  

export default AppLogin;
