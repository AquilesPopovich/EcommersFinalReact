import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './componentes/NavBar';
import { ItemListContainer } from "./componentes/ItemListContainer";
import {ItemDetailContainer} from './componentes/ItemDetailContainer'
import {Registro} from './componentes/Registro'
import {Login} from './componentes/Login'
import {Home} from './componentes/Home'
import CartProvider from './context/CartContext'
import Carrito from './componentes/Carrito.jsx'

function App() {
  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path="/" element={<ItemListContainer greetings="Productos" />} />
          <Route path="/category/:id" element={<ItemListContainer greetings="Productos" />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
      </>
  );
}

export default App;
