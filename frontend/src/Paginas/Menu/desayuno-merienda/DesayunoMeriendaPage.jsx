import React from 'react';
import { Link } from 'react-router-dom';

const DesayunoMeriendaPage = () => {
  return (
    <div className='home-title'><h1>Desayuno/Merienda</h1>
    <div className="home-container button" >
      
        <Link to="/infusiones-cafe">
          <button>Infusiones/Cafés</button>
        </Link>
        <Link to="/jugos-licuados">
          <button>Jugos/Licuados</button>
        </Link>
        <Link to="/para-acompanar">
          <button>Para Acompañar</button>
        </Link>
      
      </div>
    </div>
  );
};

export default DesayunoMeriendaPage;
