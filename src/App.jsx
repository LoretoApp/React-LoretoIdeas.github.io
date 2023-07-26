import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Productos from "./components/pages/Productos";


function App() {
  return (
<div>
  <BrowserRouter>
  <Routes>
    <Route path="/productos" element={<Productos/>} exact></Route>
  </Routes>
  </BrowserRouter>

</div>
  );
}

export default App;

