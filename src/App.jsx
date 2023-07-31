import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {  Routes, Route} from "react-router-dom";
import Navbar from './components/pages/navbar/Navbar';
import Productos from "./components/pages/productos/Productos";
import Inicio from "./components/pages/Inicio/Inicio";


function App() {
  return (
<div>



<Routes >
<Route path='/' element={<Navbar/>}> 
  <Route path='/' element={<Inicio/>}>
  <Route path='productos' element={<Productos/>}></Route>

  </Route>

</Route></Routes>
</div>
  );
}

export default App;

