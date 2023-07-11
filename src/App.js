import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './componentes/NavBar';
import { ItemListContainer } from "./componentes/ItemListContainer";
import {ItemDetailContainer} from './componentes/ItemDetailContainer'
import {Contacto} from './componentes/Contacto'
import {Home} from './componentes/Home'
import {CartContext} from './context/CartContext'
import Carrito from './componentes/Carrito.jsx'

function App() {

  const [carrito,setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) =>{
    const itemAgregado = {...item,cantidad};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((productos) => productos.id === itemAgregado.id);

    if(estaEnElCarrito){
      estaEnElCarrito.cantidad += cantidad;
    }else{
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito)

  }

  return (
    <>
      <CartContext.Provider value={{carrito,agregarAlCarrito}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path="/" element={<ItemListContainer greetings="Productos" />} />
          <Route path="/category/:id" element={<ItemListContainer greetings="Productos" />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
      </>
  );
}

export default App;
