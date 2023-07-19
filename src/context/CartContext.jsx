import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

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
    return(carrito.reduce((acumulador, producto) => acumulador + producto.price * producto.cantidad, 0))
  }

  const handleVaciar = () =>{
    setCarrito([])
  };

  const contadorCarrito = () => {
    const productosUnicos = new Set();
    carrito.forEach((producto) => {
      productosUnicos.add(producto.id);
    });
    return productosUnicos.size;
  };

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, precioTotal, handleVaciar, contadorCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
