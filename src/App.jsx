import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Productos from "./components/pages/productos/Productos";
import Inicio from "./components/pages/Inicio/Inicio";
import NavBarPage from "./components/pages/NavBar/Navbar";


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<NavBarPage />}>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="productos" element={<Productos />}></Route>
      </Route>
    </Routes>
  </div>
  );
}

export default App;
