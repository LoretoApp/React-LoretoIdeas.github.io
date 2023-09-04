import "./BotonWsp.css";
import { Link } from "react-router-dom";

export default function BotonWsp() {
  return (
    <Link className="whatsapp-float" to="https://api.whatsapp.com/send?phone=56932939888&text=Hola%21%20Quisiera%20cotizar%20el%20servicio%20de%20cocteleria" target="_blank" rel="noopener noreferrer">
<img className="whatsapp" src="icons\wspp.png" alt="whatsapp"/>
</Link>
  )
}
