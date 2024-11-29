import React, { useEffect, useState } from 'react';
import axios from 'axios';


const BebidasPage = () => {
  const [bebidas, setBebidas] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBebidas = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productos')
        const bebidasFiltradas = response.data.filter((producto) => producto.categoria === 'bebidas');
        setBebidas(bebidasFiltradas);
      } catch (err) {
        console.error('Error al obtener las bebidas:', err);
        setError('Error al obtener las bebidas')
      }
    };
    
      fetchBebidas();
  }, []);

  if (error){
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>Bebidas</h1>
      <div className="productos-container">
        {bebidas.length > 0 ? (
          bebidas.map((bebida) => (
            <div key={bebida.id} className="producto-card">
              <h3>{bebida.nombre}</h3>
              <p>{bebida.descripcion}</p>
              <p>Precio: ${bebida.precio}</p>
            </div>
          ))
        ) : (
          <p>No hay bebidas disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default BebidasPage;
