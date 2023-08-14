import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../controllers/Atentificacion/context/AuthContext";
import "../login/styles.css";

function AppLogin() {
  const [view, setView] = useState("login");

  const handleSignup = () => {
    setView("signup");
  };

  const handleLogin = () => {
    setView("login");
  };
  const { register, handleSubmit } = useForm();
  const{signup, user}= useAuth()
  console.log(user)

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
    
  });

  return (
    <div className="superContainer">
      <div className="container containerLogin">
        {view === "login" ? (
          <div className="sideA">
            <h3 className="titulo-sideA titulos-login">Inicio de Sesión</h3>
            <input
              className="input-buton input-login"
              type="email"
              placeholder="Email"
            />
            <input
              className="input-buton input-login"
              type="password"
              placeholder="Contraseña"
            />
            <a className="link-login" href="#forgot-password">
              Recupera tu contraseña
            </a>
            <button className="input-buton button-login">Registrarse</button>
          </div>
        ) : (
          <div className="sideA">
            <h3 className="titulos-login titulo-sideA">Nos alegra verte</h3>
            <p className="parrafos-login">
              Inicia Sesión para que puedas ver tus productos favoritos.
            </p>
            <button className="input-buton button-login" onClick={handleLogin}>
              Entrar
            </button>
          </div>
        )}
        <div className="sideB">
          {view === "login" ? (
            <div>
              <p className="parrafos-login">Crear cuenta</p>
              <p className="parrafos-login">
                Crea una cuenta para que puedas guardar tus pedidos y disfrutar.
              </p>
              <button
                className="input-buton button-login"
                onClick={handleSignup}
              >
                Registrate
              </button>
            </div>
          ) : (
            <div className="sideB--header">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="input-buton input-login"
                  {...register("username", { require: true })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-buton input-login"
                  {...register("email", { require: true })}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="input-buton input-login"
                  {...register("password", { require: true })}
                />
                <button type="submit" className="input-buton button-login">
                  {" "}
                  Registrarse nuevo
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppLogin;
