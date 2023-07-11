import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import data from '../data/data.json';

const categorias = data.map(producto => producto.category);
const unique = new Set(categorias);

function NavCategory() {
  return (
    <AppBar position="static" sx={{background: 'black',marginBottom: '15px',borderRadius: '25px', width: '70%', justifyContent: 'center', display: 'flex'}}>
      <Toolbar variant="dense">

        <Box sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex' }}>
          {[...unique].map((item) => (
            <Button
              variant='h3'
              key={item}
              component={Link}
              to={`/category/${item.toLowerCase()}`}
              sx={{
                mx: 1,color: '#f0f0f0cc',fontFamily: 'Montserrat, sans-serif',fontStyle: 'italic',fontWeight: 400,letterSpacing: '.1rem',fontSize: '0.8rem',
                '&:hover': {textDecoration: 'underline',},
                '&:active': {color: '#ffffff',textDecoration: 'underline',},
                '&:focus': {color: '#ffffff' }
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavCategory;