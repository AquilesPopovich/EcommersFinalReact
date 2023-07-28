import React, { useContext, useRef, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { Button, Container, Typography, Box, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

export const Checkout = () => {
  const { carrito, precioTotal, handleVaciar } = useContext(CartContext);

  const { user } = useAuth();
  const formRef = useRef();
  const [pedidoId, setPedidoId] = useState('')

  const comprar = async (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);

    const pedido = {
      cliente: ' correo: ' + user.email + ' direccion: ' + data.get('direccion'), 
      pedido: carrito,
      total: precioTotal(),
    };

    const pedidosRef = collection(db, 'pedidos');
    await addDoc(pedidosRef, pedido)
    .then((doc) =>{
      setPedidoId(doc.id)
      handleVaciar();
     
    })
  };

  if(pedidoId){
    return(
      <>
      <Container>
        <h1>Muchas gracias por tu compra!</h1>
        <Typography>tu numero de pedido es: {pedidoId}</Typography>
      </Container>
      </>
    )
  }

  return (
    <Container maxWidth='md' sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 4, mt: 4 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
      <Typography variant='h4'>Checkout</Typography>
    </Box>
    <form ref={formRef} onSubmit={comprar}>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel htmlFor='direccion'>Direccion</InputLabel>
        <Input  name='direccion' id='direccion' type='text' aria-describedby='direccion-helper' />
        <FormHelperText id='direccion-helper'>Ingrese su direccion</FormHelperText>
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button type='submit' variant='contained' sx={{ backgroundColor: '#212121' }}>
          Comprar
        </Button>
      </Box>
    </form>
  </Container>
  );
};