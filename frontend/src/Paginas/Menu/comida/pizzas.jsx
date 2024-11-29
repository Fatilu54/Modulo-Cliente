import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PizzasPage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productos')
        const pizzasFiltradas = response.data.filter((producto) => producto.categoria === 'pizzas');
        setPizzas(pizzasFiltradas);
      } catch (err) {
        console.error('Error al obtener las pizzas:', err);
        setError('Error al obtener las pizzas')
      }
    };
    
      fetchPizzas();
  }, []);

  if (error){
    return <p>{error}</p>
  }


  return (
    <div>
      <h1>Pizzas</h1>
      <div className="productos-container">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <div key={pizza.id} className="producto-card">
              <h3>{pizza.nombre}</h3>
              <p>{pizza.descripcion}</p>
              <p>Precio: ${pizza.precio}</p>
            </div>
          ))
        ) : (
          <p>No hay pizzas disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default PizzasPage;
