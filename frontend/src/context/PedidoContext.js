import React, { createContext, useContext, useState } from 'react';

const PedidoContext = createContext();

export const PedidoProvider = ({ children }) => {
  const [pedido, setPedido] = useState([]); // Inicia el pedido como un array vacío
  const [cliente, setCliente] = useState(null);

  const agregarProducto = (producto) => {
    setPedido((prevPedido) => [...prevPedido, producto]);
  };

  const registrarCliente = (clienteData) => {
    setCliente(clienteData);
  };

  const confirmarPedido = () => {
    if (cliente && pedido.length > 0) {
      alert("¡Pedido realizado con éxito! Su pedido está en proceso.");
      setPedido([]); // Limpiar el pedido después de confirmarlo
    }
  };

  return (
    <PedidoContext.Provider value={{ pedido, cliente, agregarProducto, registrarCliente, confirmarPedido }}>
      {children}
    </PedidoContext.Provider>
  );
};

export const usePedido = () => useContext(PedidoContext);
