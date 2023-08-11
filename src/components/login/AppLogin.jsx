import { useState } from 'react';
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
        <div className="container containerLogin">
          {view === 'login' ? (
            <div className="sideA">
              <h3 className='titulo-sideA titulos-login'>Inicio de Sesión</h3>
              <input className='input-buton input-login' type="email" placeholder="Email" />
              <input className='input-buton input-login' type="password" placeholder="Contraseña" />
              <a className='link-login' href="#forgot-password">Recupera tu contraseña</a>
              <button className='input-buton button-login'>Registrarse</button>
            </div>
          ) : (
            <div className="sideA">
              <h3 className='titulos-login titulo-sideA' >Nos alegra verte</h3>
              <p className='parrafos-login'>Inicia Sesión para que puedas ver tus productos favoritos.</p>
              <button className='input-buton button-login' onClick={handleLogin}>Entrar</button>
            </div>
          )}
          <div className="sideB">
            {view === 'login' ? (
              <div>
                <p className='parrafos-login'>Crear cuenta</p>
                <p className='parrafos-login'>Crea una cuenta para que puedas guardar tus pedidos y disfrutar.</p>
                <button className='input-buton button-login' onClick={handleSignup}>Registrate</button>
              </div>
            ) : (
              <div className="sideB--header">
                <h3 className='titulo-sideA titulos-login' >Crear cuenta</h3>
                <input className='input-buton input-login' type="text" placeholder="Nombre" />
                <input className='input-buton input-login' type="email" placeholder="Email" />
                <input className='input-buton input-login' type="password" placeholder="Contraseña" />
                <button className='input-buton button-login'>Registrate</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  

export default AppLogin;
