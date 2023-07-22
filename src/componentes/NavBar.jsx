import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../assets/logo.png";
import {data} from '../data/data.json'

function NavBar() {
  return (
    <AppBar position="static" sx={{ background: 'black', marginBottom: '10px', borderRadius: '10px' }}>
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mx: 'auto', display: 'flex', alignItems: 'center' }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logo} alt="logo" style={{ width: '40px', marginRight: '5px' }} />
          </Link>
        </Typography>

        <Box sx={{ flexGrow: 1, justifyContent: 'start', display: 'flex' }}>

          <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
            <Button
              component={Link}
              to="/Home"
              sx={{
                textDecoration: 'none',
                color: 'inherit', margin: ' 0 1rem 0 2.5rem',
                '&:hover': { color: 'blue'
                }
              }}
            >
              Inicio
            </Button>
            <Button
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'inherit', margin: ' 0 1rem',
                '&:hover': { color: 'blue'}
              }}
            >
              Productos
            </Button>
            <Button
              component={Link}
              to="/Login"
              sx={{textDecoration: 'none',margin: ' 0 1rem',color: 'inherit','&:hover': { color: 'blue'}
              }}
            >
              Logeate
            </Button>
          </ul>
        </Box>

        <CartWidget />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;


