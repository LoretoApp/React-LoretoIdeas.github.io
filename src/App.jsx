import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {  Routes, Route} from "react-router-dom";
import Navbar from './components/pages/navbar/Navbar';
import Productos from "./components/pages/productos/Productos";
import Inicio from "./components/pages/Inicio/Inicio";


function App() {
  return (
<div>
<Routes>
<Route path='/' element={<Navbar/>}>
  <Route path='/productos' element={<Productos/>}></Route>
  <Route path='/inicio' element={<Inicio/>}></Route>

</Route>

</Routes>

</div>
  );
}
    {/* <Route path="/productos" element={<Productos/>} exact></Route> */}

export default App;

