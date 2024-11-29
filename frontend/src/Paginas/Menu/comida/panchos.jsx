import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PanchosPage = () => {
  const [panchos, setPanchos] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPanchos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productos')
        const panchosFiltradas = response.data.filter((producto) => producto.categoria === 'panchos');
        setPanchos(panchosFiltradas);
      } catch (err) {
        console.error('Error al obtener los productos panchos:', err);
        setError('Error al obtener los productos panchos')
      }
    };
    
      fetchPanchos();
  }, []);

  if (error){
    return <p>{error}</p>
  }




  return (
    <div>
      <h1>Panchos</h1>
      <div className="productos-container">
        {panchos.length > 0 ? (
          panchos.map((pancho) => (
            <div key={pancho.id} className="producto-card">
              <h3>{pancho.nombre}</h3>
              <p>{pancho.descripcion}</p>
              <p>Precio: ${pancho.precio}</p>
            </div>
          ))
        ) : (
          <p>No hay panchos disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default PanchosPage;
