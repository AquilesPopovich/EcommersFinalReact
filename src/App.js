import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './componentes/NavBar';
import { ItemListContainer } from "./componentes/ItemListContainer";
import {ItemDetailContainer} from './componentes/ItemDetailContainer';
import {Registro} from './componentes/Registro';
import {Login} from './componentes/Login';
import {Home} from './componentes/Home';
import CartProvider from './context/CartContext';
import Carrito from './componentes/Carrito.jsx';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './componentes/ProtectedRoutes';
import {Checkout} from './componentes/Checkout'

function App() {
  return (
    <>
    <AuthProvider>
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/carrito' element={<ProtectedRoute><Carrito/></ProtectedRoute>}/>
          <Route path="/" element={<ItemListContainer greetings="Productos" />} />
          <Route path="/category/:id" element={<ItemListContainer greetings="Productos" />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
       
      </BrowserRouter>
      </CartProvider>
      </AuthProvider>
      </>
  );
}

export default App;
