import { useContext, useState } from 'react';
import { Typography } from '@mui/material';
import {ItemCount} from './ItemCount'
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({ productos }) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext);
  console.log(carrito)

  const [cantidad,setCantidad] = useState(1)

  const sumar = () =>{
    cantidad < productos.stock && setCantidad(cantidad + 1);
}
const restar = () =>{
    cantidad> 1 && setCantidad(cantidad - 1);
}

 

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          padding: '10px',
          margin: '10px 20px',
        }}
      >
        <img
          style={{
            width: '400px',
            height: '400px',
            border: '2px solid gray',
            borderRadius: '10px',
            padding: '10px',
            marginRight: '20px',
          }}
          src={productos.image}
          alt={productos.title}
        />
        <div style={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant='h5'>{productos.title}</Typography>
          <Typography>{productos.description}</Typography>
          <Typography component='p' variant='body1' sx={{textAlign: 'start', m: '10px 0', border: '2px solid gray', width: '20%', borderRadius: '15px', display: 'flex', justifyContent: 'center'}}>
            Precio: <span style={{ color: 'green', fontWeight: '600' }}>${productos.price}US</span>
          </Typography>
          <ItemCount sumar={sumar} restar={restar} cantidad={cantidad} agregar= {() =>{agregarAlCarrito(item, cantidad)}} productos={productos}/>
          
        </div>
      </div>
    </>
  );
};


