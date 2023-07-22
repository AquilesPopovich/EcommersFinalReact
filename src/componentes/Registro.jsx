import React from 'react';
import {Link} from 'react-router-dom'
import { Button, Container, Typography, Box, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';

export const Registro = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
    
  };


  return (
    <Container maxWidth='md' sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 4, mt: 4 }}>
       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant='h4'>Formulario de Registro</Typography>
        <Typography variant='body1'>
          ¿Ya contas con una cuenta? <Link to='/login'>Haz clic aquí</Link>
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(enviar)}>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor='nombres'>Nombre completo</InputLabel>
          <Input
            {...register('nombre')}
            id='nombres'
            type='text'
            aria-describedby='nombres-helper'
          />
          <FormHelperText id='nombres-helper'>Ingrese su nombre</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            {...register('email')}
            id='email'
            type='email'
            aria-describedby='email-helper'
          />
          <FormHelperText id='email-helper'>Ingrese su email</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor='nombreUsuario'>Nombre de Usuario</InputLabel>
          <Input
            {...register('nombreUsuario')}
            id='nombreUsuario'
            type='text'
            aria-describedby='nombreUsuario-helper'
          />
          <FormHelperText id='nombreUsuario-helper'>Ingrese su nombre de Usuario</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor='password'>Contraseña</InputLabel>
          <Input
            {...register('password')}
            id='password'
            type='password'
            aria-describedby='password-helper'
          />
          <FormHelperText id='password-helper'>Ingrese su contraseña</FormHelperText>
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button type='submit' variant='contained' sx={{ backgroundColor: '#212121' }}>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
          <Typography variant="body1">Registrarme</Typography>
        </Link>
      </Button>
    </Box>
      </form>
    </Container>
  );
};


