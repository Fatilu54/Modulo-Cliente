import axios from 'axios';

const API_URL = 'http://localhost:3000/productos'; // Asegúrate de que la URL sea correcta

export const obtenerProductos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};
