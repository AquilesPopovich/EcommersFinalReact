import { Container } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const carrito = useContext(CartContext)

  return (
    <>
    <Container>
        <h1>Main title</h1>
        {
            carrito.map((prod) =>{
                <h2>{prod.title}</h2>
            })
        }
    </Container>
    </>
  )
}

export default Carrito