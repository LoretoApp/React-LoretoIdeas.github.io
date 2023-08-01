import axios from "axios"

const getTortasList = async () => {
  const url = "http://localhost:3000/mostrar";
  const response = await axios.get(url);
  return response.data
}

export default getTortasList