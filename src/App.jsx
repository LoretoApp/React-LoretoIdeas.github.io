import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from "./components/pages/Navbar/Navbar";
import DarkVariantExample from "./components/Carrusel";
import ShapeExample from "./components/pages/inicio";
import Footer from './components/pages/Footer/Footer';


function App() {
  return (
<div>
<Navbar/>
<ShapeExample/>
<DarkVariantExample/>
<Footer/>
</div>
  );
}

export default App;

