import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
  const { login, loginWithGoogle, resetPasword,user } = useAuth();
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

  const handleResetPasword = async () => {
    if (!user || !user.email) {
      return setError('Por favor ingrese su email');
    }
  
    try {
      await resetPasword(user.email);
      setError('Te enviamos un email con un link para que reestablezcas tu contraseña');
    } catch (error) {
      setError(error.message);
    }
  };
  

  return (
    <Container maxWidth='md' sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 4, mt: 6 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant='h4'>Iniciar Sesión</Typography>
        <Typography variant='body1'>
          <Link to='/registro' sx={{ textDecoration: 'none', color: '#1976d2' }}>
            ¿No tienes una cuenta? Registrate aquí
          </Link>
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Button
            onClick={handleLoginGoogle}
            variant='contained'
            sx={{
              backgroundColor: '#ffffff',
              color: '#757575',
              '&:hover': {
                backgroundColor: '#eeeeee',
              },
              '& .MuiSvgIcon-root': {
                marginRight: '8px',
              },
            }}
          >
            <GoogleIcon fontSize='small' />
            Iniciar Sesión con Google
          </Button>
          <Link onClick={handleResetPasword} sx={{ textDecoration: 'none', color: '#1976d2' }}>
            Reestablecer Contraseña
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Button type='submit' variant='contained' sx={{ backgroundColor: '#212121', width: '80%', color: '#ffffff', mb: 2 }}>
            Iniciar Sesión
          </Button>
         
        </Box>
      </form>
      {error && <Typography color='error'>{error}</Typography>}
    </Container>
  );
  
};
