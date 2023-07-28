import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from "./components/pages/Navbar/Navbar";
import DarkVariantExample from "./components/Carrusel";
import ShapeExample from "./components/pages/inicio";


function App() {
  return (
<div>
<Navbar/>
<ShapeExample/>
<DarkVariantExample/>
</div>
  );
}

export default App;

