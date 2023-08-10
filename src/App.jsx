import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Productos from "./components/pages/productos/Productos";
import ShapeExample from "./components/pages/Inicio/Inicio";
import Cocteleria from "./components/pages/cocteleria/Cocteleria";
import Desayunos from "./components/pages/desayunos/Desayunos";
import Nosotros from "./components/pages/nosotros/Nosotros";
import Carrito from "./components/carrito/carrito";
import AppLogin from "./components/login/AppLogin";
import CarritoP from "./components/carrito/CarritoPrincipal";


function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<ShapeExample />}/>
        <Route path="productos" element={<Productos />}/>
        <Route path="cocteleria" element={<Cocteleria />}/>
        <Route path="desayunos" element={<Desayunos />}/>
        <Route path="nosotros" element={<Nosotros />}/>
        <Route path="carrito" element={<Carrito />}/>
        <Route path="login" element={<AppLogin />}/>
        <Route path="carritop" element={<CarritoP />}/>
     
    </Routes>
  </div>
  );
}

export default App;
