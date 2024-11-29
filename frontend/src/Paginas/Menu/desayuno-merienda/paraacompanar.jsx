import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParaAcompañarPage = () => {
  const [acompanamientos, setAcompanamientos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAcompañarPage = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productos')
        const acompanamientosFiltradas = response.data.filter((producto) => producto.categoria === 'pAcompanar');
        setAcompanamientos(acompanamientosFiltradas);
      } catch (err) {
        console.error('Error al obtener los Acompañamientos:', err);
        setError('Error al obtener las Acompañamientos')
      }
    };
    
      fetchAcompañarPage();
  }, []);

  if (error){
    return <p>{error}</p>
  }


  return (
    <div>
      <h1>Para Acompañar</h1>
      <div className="productos-container">
        {acompanamientos.length > 0 ? (
          acompanamientos.map((acompanamiento) => (
            <div key={acompanamiento.id} className="producto-card">
              <h3>{acompanamiento.nombre}</h3>
              <p>{acompanamiento.descripcion}</p>
              <p>Precio: ${acompanamiento.precio}</p>
            </div>
          ))
        ) : (
          <p>No hay acompañamientos disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default ParaAcompañarPage;
