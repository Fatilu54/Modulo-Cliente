import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmpanadasPage = () => {
  const [empanadas, setEmpanadas] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEmpanadas = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productos')
        const empanadasFiltradas = response.data.filter((producto) => producto.categoria === 'empanadas');
        setEmpanadas(empanadasFiltradas);
      } catch (err) {
        console.error('Error al obtener los productos empanadas:', err);
        setError('Error al obtener los productos empanadas')
      }
    };
    
      fetchEmpanadas();
  }, []);

  if (error){
    return <p>{error}</p>
  }


  return (
    <div>
      <h1>Empanadas</h1>
      <div className="productos-container">
        {empanadas.length > 0 ? (
          empanadas.map((empanada) => (
            <div key={empanada.id} className="producto-card">
              <h3>{empanada.nombre}</h3>
              <p>{empanada.descripcion}</p>
              <p>Precio: ${empanada.precio}</p>
            </div>
          ))
        ) : (
          <p>No hay empanadas disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default EmpanadasPage;
