import axios from "axios"

const getTortasList = async () => {
  const url = "https://backendloretoideas.onrender.com/mostrar";
  const response = await axios.get(url);
  return response.data
}

export default getTortasList