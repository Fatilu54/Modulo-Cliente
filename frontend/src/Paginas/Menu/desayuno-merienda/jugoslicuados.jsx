import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JugosLicuadosPage = () => {
  const [jugosLicuados, setJugosLicuados] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJugosLicuadosPage = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productos')
        const acompanamientosFiltradas = response.data.filter((producto) => producto.categoria === 'jugosLicuados');
        setJugosLicuados(acompanamientosFiltradas);
      } catch (err) {
        console.error('Error al obtener los Jugos y Licuados:', err);
        setError('Error al obtener los Jugos y Licuados')
      }
    };
    
      fetchJugosLicuadosPage();
  }, []);

  if (error){
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>Jugos y Licuados</h1>
      <div className="productos-container">
        {jugosLicuados.length > 0 ? (
          jugosLicuados.map((jugo) => (
            <div key={jugo.id} className="producto-card">
              <h3>{jugo.nombre}</h3>
              <p>{jugo.descripcion}</p>
              <p>Precio: ${jugo.precio}</p>
            </div>
          ))
        ) : (
          <p>No hay jugos ni licuados disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default JugosLicuadosPage;
