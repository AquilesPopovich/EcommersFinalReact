import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLoginGoogle = async () =>{
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Container maxWidth='md' sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 4, mt: 6 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant='h4'>Iniciar Sesión</Typography>
        <Typography variant='body1'>
          ¿No tenes una cuenta? <Link to='/registro'>Registrate aquí</Link>
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            {...register('email', {
              required: 'El email es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Ingrese un email válido',
              },
            })}
            id='email'
            type='email'
            aria-describedby='email-helper'
          />
          {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor='password'>Contraseña</InputLabel>
          <Input
            {...register('password', { required: 'La contraseña es requerida' })}
            id='password'
            type='password'
            aria-describedby='password-helper'
          />
          {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type='submit' variant='contained' sx={{ backgroundColor: '#212121', color: '#ffffff' }}>
            Iniciar Sesión
          </Button>
        </Box>
      </form>
      <Button onClick={handleLoginGoogle}>Login with google</Button>
      {error && <Typography color='error'>{error}</Typography>}
    </Container>
  );
};
