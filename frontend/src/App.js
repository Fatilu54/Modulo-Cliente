import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { PedidoProvider } from './context/PedidoContext.js';
import RegisterClienteForm from './components/RegisterClienteForm';
import BebidasPage from './Paginas/bebidasPage.jsx';
import DesayunoMeriendaPage from './Paginas/Menu/desayuno-merienda/DesayunoMeriendaPage.jsx';
import ComidasPage from './Paginas/Menu/comida/ComidasPage.jsx';
import VisualizarPedidoPage from './Paginas/visualizarPedido.jsx' 
import InfusionesCafePage from './Paginas/Menu/desayuno-merienda/infusionescafe.jsx'
import JugosLicuadosPage from './Paginas/Menu/desayuno-merienda/jugoslicuados.jsx'
import ParaAcompañarPage from './Paginas/Menu/desayuno-merienda/paraacompanar.jsx'
import EmpanadasPage from './Paginas/Menu/comida/empanadas.jsx'
import PanchosPage from './Paginas/Menu/comida/panchos.jsx'
import PizzasPage from './Paginas/Menu/comida/pizzas.jsx'
import logo from './imagenes/logo-sosneado.png'
import flecha from './imagenes/flecha.png'

function App() {
  return (
    <PedidoProvider>
      <Router>
        <div>
          <NavBar />
          <BackButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro-cliente" element={<RegisterClienteForm />} />
            <Route path="/bebidas" element={<BebidasPage />} />
            <Route path="/desayuno-merienda" element={<DesayunoMeriendaPage />} />
            <Route path="/comidas" element={<ComidasPage />} />
            <Route path="/visualizar-pedido" element={<VisualizarPedidoPage />} />
            <Route path="/infusiones-cafe" element={<InfusionesCafePage />} />
            <Route path="/jugos-licuados" element={<JugosLicuadosPage />} />
            <Route path="/para-acompanar" element={<ParaAcompañarPage />} />
            <Route path="/empanadas" element={<EmpanadasPage />} />
            <Route path="/panchos" element={<PanchosPage />} />
            <Route path="/pizzas" element={<PizzasPage />} />

          </Routes>
        </div>
      </Router>
    </PedidoProvider>
  );
}

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    }
  };

  return (
    <div className = "back-button">
      <img 
      src={flecha}
      alt="Volver" 
      className="flecha-boton"
      onClick={handleBack}
      style={{ crusor: 'pointer'}} 
      />
    </div>
  );
} 

function NavBar () {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo-sosneado" />
      </div>
      <ul className="nav-links">
        <li><Link to="/visualizar-pedido">Mi pedido</Link></li>
      </ul>
    </nav>
  );
}


function Home() {
  return (
    <div>
      <div className="form-wrapper">
      <RegisterClienteForm /> 
    </div>
    <div>
      <h1 className="home-title">Realizar Pedido</h1>
      <div className="home-container">
        <Link to="/bebidas">
        <button>Bebidas</button>
      </Link>
      <Link to="/desayuno-merienda">
        <button>Desayuno/Merienda</button>
      </Link>
      <Link to="/comidas">
        <button>Comidas</button>
      </Link>
      </div>
    </div>
  </div>
);
}


export default App;
