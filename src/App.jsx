import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Productos from "./components/pages/productos/Productos";
import ShapeExample from "./components/pages/Inicio/Inicio";
import Cocteleria from "./components/pages/cocteleria/Cocteleria";
import Desayunos from "./components/pages/desayunos/Desayunos";
import Nosotros from "./components/pages/nosotros/Nosotros";
import AppLogin from "./components/login/AppLogin";
import { AuthProvider } from "./controllers/Atentificacion/context/AuthContext";
import VistaAdministrador from "./components/pages/admin/admin";

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

          <Route path="administrador" element={<VistaAdministrador/>} />
          <Route path="login" element={<AppLogin />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
