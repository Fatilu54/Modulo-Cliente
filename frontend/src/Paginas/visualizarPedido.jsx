import React from 'react';
import { usePedido } from '../context/PedidoContext'; // Asegúrate de que la ruta de importación sea correcta

const VisualizarPedidoPage = () => {
  const { pedido, limpiarPedido } = usePedido();

  const calcularTotal = () => {
    return pedido.reduce((total, producto) => total + producto.precio, 0);
  };

  return (
    <div>
      <h1>Mi Pedido</h1>
      {pedido.length > 0 ? (
        <div className="pedido-container">
          {pedido.map((producto, index) => (
            <div key={index} className="producto-card">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
            </div>
          ))}
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={limpiarPedido}>Limpiar Pedido</button>
        </div>
      ) : (
        <p>No hay productos en el pedido.</p>
      )}
    </div>
  );
};

export default VisualizarPedidoPage;
