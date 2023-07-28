import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from './components/pages/navbar/Navbar';
import ShapeExample from './components/pages/Inicio/Inicio';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Productos from "./components/pages/Productos";


function App() {
  return (
<div>
    <Navbar/>
    <ShapeExample/>
  <BrowserRouter>
  <Routes>
    <Route path="/productos" element={<Productos/>} exact></Route>
  </Routes>
  </BrowserRouter>

</div>
  );
}

export default App;

