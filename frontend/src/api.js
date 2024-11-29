import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Cambia esta URL si tu backend está en otro lugar
});

export default api;
