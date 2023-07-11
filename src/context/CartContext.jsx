import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }

    setCarrito(nuevoCarrito);
  };

  const precioTotal = () =>{
    return(carrito.reduce((acumulador, producto) => acumulador + producto.price * producto.cantidad))
  }

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, precioTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
