import { Container } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const {carrito, precioTotal} = useContext(CartContext)


  return (
    <>
    <Container>
        <h1>Carrito</h1>
        {
            carrito.map((prod) =>{
                return(
                <div key={prod.id}>
                    <div><img src={prod.image} alt={prod.title} /></div>
                    <h3>{prod.title}</h3>
                    <p>Precio por unidad: {prod.price}</p>
                    <p>Valor total: ${prod.price * prod.cantidad}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                </div>
                )
            })
        }
        <h2>Precio total: ${precioTotal()}</h2>
    </Container>
    </>
  )
}

export default Carrito