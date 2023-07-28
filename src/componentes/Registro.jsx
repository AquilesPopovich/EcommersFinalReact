import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { useAuth } from '../context/AuthContext';

export const Registro = () => {
  const [user, setUser] = useState({
    nombres: '',
    email: '',
    password: ''
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password); // Corregir aquí, solo enviar email y contraseña
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth='md' sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 4, mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant='h4'>Formulario de Registro</Typography>
        <Typography variant='body1'>
          ¿Ya cuentas con una cuenta? <Link to='/login'>Haz clic aquí</Link>
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor='nombres'>Nombre completo</InputLabel>
          <Input onChange={handleChange} name='nombres' id='nombres' type='text' aria-describedby='nombres-helper' />
          <FormHelperText id='nombres-helper'>Ingrese su nombre</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input onChange={handleChange} name='email' id='email' type='email' aria-describedby='email-helper' />
          <FormHelperText id='email-helper'>Ingrese su email</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel htmlFor='password'>Contraseña</InputLabel>
          <Input onChange={handleChange} name='password' id='password' type='password' aria-describedby='password-helper' />
          <FormHelperText id='password-helper'>Ingrese su contraseña</FormHelperText>
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type='submit' variant='contained' sx={{ backgroundColor: '#212121' }}>
            Registrarme
          </Button>
        </Box>
      </form>
      {error && <Typography color='error'>{error}</Typography>}
    </Container>
  );
};
