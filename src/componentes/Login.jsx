
import {Link} from 'react-router-dom'
import { Button, Container, Typography, Box, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import {useState} from 'react'

export const Login = ({ userData, handleLogin }) => {
    const [usuario, setUsuario] = useState({
        nombreUsuario: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userData && userData.nombreUsuario === usuario.nombreUsuario && userData.password === usuario.password){
            handleLogin(true);
        }else{
            alert('error')
        }
    }

    const handleUsuario = (e) => {
        setUsuario({
          ...usuario,
          [e.target.id]: e.target.value,
        });
      };

      return (
        <Container maxWidth='md' sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 4, mt: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant='h4'>Iniciar Sesión</Typography>
            <Typography variant='body1'>
          ¿No tenes una cuenta? <Link to='/registro'>Registrate aquí</Link>
        </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel htmlFor='nombreUsuario'>Nombre usuario</InputLabel>
              <Input
                onChange={handleUsuario}
                value={usuario.nombreUsuario}
                id='nombreUsuario'
                type='text'
                aria-describedby='-helper'
              />
              <FormHelperText id='nombreUsuario-helper'>Ingrese su email</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel htmlFor='password'>Contraseña</InputLabel>
              <Input
                onChange={handleUsuario}
                value={usuario.password}
                id='password'
                type='password'
                aria-describedby='password-helper'
              />
              <FormHelperText id='password-helper'>Ingrese su contraseña</FormHelperText>
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button type='submit' variant='contained' sx={{ backgroundColor: '#212121', color: '#ffffff' }}>
                Iniciar Sesión
              </Button>
            </Box>
          </form>
        </Container>
      );
    };