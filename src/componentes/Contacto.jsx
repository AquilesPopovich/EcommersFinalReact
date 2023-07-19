import { Button, Container, Typography, Box, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { useState } from 'react';

export const Contacto = () => {

    const [valores,setValores] = useState({
        nombres: '',
        email: '',
        telefono: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleValores = (e) => {
        setValores({
            ...valores, [e.target.id]: e.target.value
        })
    }

    return (
        <Container maxWidth='md' sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 4, mt: 6 }}>
          <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant='h4'>Formulario de Contacto</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel htmlFor='nombres'>Nombre completo</InputLabel>
              <Input
                onChange={handleValores}
                value={valores.nombres}
                id='nombres'
                type='text'
                aria-describedby='nombres-helper'
              />
              <FormHelperText id='nombres-helper'>Ingrese su nombre</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel htmlFor='email'>Email</InputLabel>
              <Input
                onChange={handleValores}
                value={valores.email}
                id='email'
                type='email'
                aria-describedby='email-helper'
              />
              <FormHelperText id='email-helper'>Ingrese su email</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel htmlFor='telefono'>Teléfono</InputLabel>
              <Input
                onChange={handleValores}
                value={valores.telefono}
                id='telefono'
                type='tel'
                aria-describedby='telefono-helper'
              />
              <FormHelperText id='telefono-helper'>Ingrese su número telefónico</FormHelperText>
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button type='submit' variant='contained' sx={{ backgroundColor: '#212121', color: '#ffffff' }}>
                Enviar
              </Button>
            </Box>
          </form>
        </Container>
      );
    };
