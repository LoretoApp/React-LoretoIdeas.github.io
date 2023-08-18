import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Productos from "./components/pages/productos/Productos";
import ShapeExample from "./components/pages/Inicio/Inicio";
import Cocteleria from "./components/pages/cocteleria/Cocteleria";
import Desayunos from "./components/pages/desayunos/Desayunos";
import Nosotros from "./components/pages/nosotros/Nosotros";
import { AuthProvider } from "./controllers/Atentificacion/context/AuthContext";
import VistaAdministrador from "./components/pages/admin/admin";
import AppRegister from "./components/login/AppRegister";
import CrearTartaleta from "./components/pages/admin/Tartaletas/CrearTartaleta";
import CarritoP from "./components/carrito/CarritoPrincipal";

function App() {

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ShapeExample />} />
          <Route path="productos" element={<Productos />} />
          <Route path="cocteleria" element={<Cocteleria />} />
          <Route path="desayunos" element={<Desayunos />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="administrador" element={<VistaAdministrador />} />
          <Route path="login" element={<AppRegister />} />
          <Route path="administrador" element={<VistaAdministrador/>}/>
          <Route path="administrador1" element={<CrearTartaleta/>}/>
          <Route path="carrito" element={<CarritoP/>}/>
          
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
