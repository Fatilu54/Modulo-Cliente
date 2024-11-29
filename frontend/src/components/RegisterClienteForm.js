import React, { useState } from 'react';
import { usePedido } from '../context/PedidoContext';

const RegisterClienteForm = () => {
  const { registrarCliente } = usePedido();
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [apellido, setMesa] = useState('');
  const [formaPago, setFormaPago] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    registrarCliente({ nombre, apellido, formaPago });
    alert("Cliente registrado con éxito");
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h1> Cargar Datos </h1>
      <div className="form-group">
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={(e) => setMesa(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Telefono:</label>
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
      </div>
      
      <div className="form-group">
        <label>Forma de Pago:</label>
        <select value={formaPago} onChange={(e) => setFormaPago(e.target.value)} required>
          <option value="" disabled>Seleccione una forma de pago</option>
          <option value="efectivo">Efectivo</option>
          <option value="tarjeta">Tarjeta de Crédito/Débito</option>
          <option value="transferencia">Transferencia</option>
        </select>
      </div>
      <button className="form-button" type="submit">Registrar Cliente</button>
    </form>
  );
};

export default RegisterClienteForm;
