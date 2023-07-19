import React, { useContext } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
  const { carrito, precioTotal, handleVaciar } = useContext(CartContext);

  return (
    <Container
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '32px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {carrito.length > 0 ? (
        <>
          {carrito.map((prod) => (
            <div
              key={prod.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px',
              }}
            >
              <img
                src={prod.image}
                alt={prod.title}
                style={{ height: '65px', width: '65px', marginRight: '16px' }}
              />
              <div style={{ display: 'flex',
              alignItems: 'center',
              marginTop: '16px'}}>
                <Typography sx={{m: "0 40px"}} variant="h6">{prod.title}</Typography>
                <Typography sx={{m: "0 40px"}}>Precio por unidad: {prod.price}</Typography>
                <Typography sx={{m: "0 40px"}}>Valor total: ${prod.price * prod.cantidad}</Typography>
                <Typography sx={{m: "0 40px"}}>Cantidad: {prod.cantidad}</Typography>
              </div>
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '16px',
            }}
          >
            <Typography variant="h5">Precio total: <span style={{color: 'green'}}>${precioTotal()}</span></Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handleVaciar}
              sx={{
                backgroundColor: '#212121',
                color: '#ffffff',
                width: '20%',
              }}
            >
              Vaciar
            </Button>
          </div>
        </>
      ) : (
        <Typography>No hay productos en el carrito.</Typography>
      )}
    </Container>
  );
};

export default Carrito;
