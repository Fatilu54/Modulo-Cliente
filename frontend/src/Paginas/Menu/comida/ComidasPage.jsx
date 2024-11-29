import React from 'react';
import { Link } from 'react-router-dom';

const ComidasPage = () => {
  return (
    <div className='home-title'><h1>Comida</h1>
    <div className="home-container button">
      <Link to="/empanadas">
        <button>Empanadas</button>
      </Link>
      <Link to="/panchos">
        <button>Panchos</button>
      </Link>
      <Link to="/pizzas">
        <button>Pizzas</button>
      </Link>
    </div>
    </div>
  );
};

export default ComidasPage;
