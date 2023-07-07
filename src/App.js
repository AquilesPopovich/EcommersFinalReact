import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './componentes/NavBar';
import { ItemListContainer } from "./componentes/ItemListContainer";

function App() {
  return (
   
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings="Productos" />} />
          <Route path="/category/:id" element={<ItemListContainer greetings="Productos" />} />
          <Route path="/item/:id" element={<ItemDetailContainer greetings="Productos" />} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
