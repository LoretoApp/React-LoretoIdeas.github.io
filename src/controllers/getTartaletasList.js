import axios from "axios"

const getTartaletasList = async () => {
  const url = "https://backendloretoideas.onrender.com/tartaleta/mostrartartaletas";
  const response = await axios.get(url);
  return response.data
}

export default getTartaletasList