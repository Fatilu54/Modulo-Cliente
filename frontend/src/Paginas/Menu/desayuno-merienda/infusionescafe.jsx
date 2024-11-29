import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InfusionesCafePage = () => {
  const [infusiones, setInfusiones] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJugosLicuadosPage = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productos')
        const infusionesFiltradas = response.data.filter((producto) => producto.categoria === 'infusionesCafe');
        setInfusiones(infusionesFiltradas);
      } catch (err) {
        console.error('Error al obtener las infusiones:', err);
        setError('Error al obtener las infusiones')
      }
    };
    
      fetchJugosLicuadosPage();
  }, []);

  if (error){
    return <p>{error}</p>
  }


  return (
    <div>
      <h1>Infusiones y Café</h1>
      <div className="productos-container">
        {infusiones.length > 0 ? (
          infusiones.map((infusion) => (
            <div key={infusion.id} className="producto-card">
              <h3>{infusion.nombre}</h3>
              <p>{infusion.descripcion}</p>
              <p>Precio: ${infusion.precio}</p>
            </div>
          ))
        ) : (
          <p>No hay infusiones disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default InfusionesCafePage;

  