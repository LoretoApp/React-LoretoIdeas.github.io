import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Productos from "./components/pages/productos/Productos";
import ShapeExample from "./components/pages/Inicio/Inicio";
import Cocteleria from "./components/pages/cocteleria/Cocteleria";
import Desayunos from "./components/pages/desayunos/Desayunos";
import Nosotros from "./components/pages/nosotros/Nosotros";
import CrearTartaleta from "./components/pages/admin/Tartaletas/CrearTartaleta";
import AppLogin from "./components/login/AppLogin";
import ModificarFullTartaleta from "./components/pages/admin/Tartaletas/ModificarFullTartaleta";
import ModificarStatusTartaleta from "./components/pages/admin/Tartaletas/ModificarStatusTartaleta";
import MostrarTartaletas from "./components/pages/admin/Tartaletas/MostrarTartaletas";
import CrearTorta from "./components/pages/admin/Tortas/CrearTorta";
import ModificarFullTorta from "./components/pages/admin/Tortas/ModificarFullTorta";
import ModificarStatusTorta from "./components/pages/admin/Tortas/ModificarStatusTorta";
import MostrarTorta from "./components/pages/admin/Tortas/MostrarTorta";
import Admin from "./components/pages/admin/Admin"






function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<ShapeExample />}/>
        <Route path="productos" element={<Productos />}/>
        <Route path="cocteleria" element={<Cocteleria />}/>
        <Route path="desayunos" element={<Desayunos />}/>
        <Route path="nosotros" element={<Nosotros />}/> 
        <Route path="administrador" element={<CrearTartaleta />}/>
        <Route path="login" element={<AppLogin />}/>
        
    
    </Routes>
  </div>
  );
}

export default App;
