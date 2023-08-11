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
        <Route path="administrador2" element={<ModificarFullTartaleta />}/>
        <Route path="administrador3" element={<ModificarStatusTartaleta />}/>
        <Route path="administrador4" element={<MostrarTartaletas />}/>
        <Route path="administrador5" element={<CrearTorta />}/>
        <Route path="administrador6" element={<ModificarFullTorta />}/>
        <Route path="administrador7" element= {<ModificarStatusTorta/>}/>
        <Route path="administrador8" element={<MostrarTorta />}/>
        
        {/* Falta solo dar estilos a la ruta administrados 4 y 8 que tienen tablas, y muestran productos todas las demas listas */}
    
    </Routes>
  </div>
  );
}

export default App;
