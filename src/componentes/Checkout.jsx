import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { Container, Typography, TextField, Button } from '@mui/material';

const Checkout = () => {
  const { carrito, precioTotal, handleVaciar } = useContext(CartContext);
  const [register, handleSubmit] = useForm();
  const { user } = useAuth();

  const comprar = async (data) => {
    const pedido = {
      cliente: user + data.direccion, 
      pedido: carrito,
      total: precioTotal(),
    };

    const pedidosRef = collection(db, 'pedidos');
    await addDoc(pedidosRef, pedido); 

    handleVaciar(); 
  };

  return (
    <Container maxWidth='md' sx={{ mt: 4 }}>
      <Typography variant='h4' sx={{ mb: 2 }}>
        Finalizar compra
      </Typography>
      <form onSubmit={handleSubmit(comprar)}>
        <TextField
          label='Escribe tu dirección'
          variant='outlined'
          fullWidth
          {...register('direccion')}
          sx={{ mb: 2 }}
        />

        <Button type='submit' variant='contained' sx={{ backgroundColor: '#212121', color: '#ffffff' }}>
          Comprar
        </Button>
      </form>
    </Container>
  );
};

export default Checkout;
