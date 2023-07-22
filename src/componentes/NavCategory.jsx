import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import data from '../data/data.json';

const categorias = data.map((producto) => producto.category);
const unique = new Set(categorias);





function NavCategory() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'none',
        borderBottom: '1px solid gray',
        borderRadius: '10px',
        marginBottom: '15px',
        marginTop: '20px',
        width: '70%', 
        margin: '0 auto',
      }}
    >
      <Toolbar variant="dense" disableGutters>
        {[...unique].map((item) => (
          <Button
            variant="h3"
            key={item}
            component={Link}
            to={`/category/${item.toLowerCase()}`}
            onClick={() => handleCategoryClick(item)}
            sx={{
              color: activeCategory === item ? '#000' : '#666666',
              fontFamily: 'Montserrat, sans-serif',
              fontStyle: 'italic',
              fontWeight: activeCategory === item ? '550' : '400',
              letterSpacing: '.1rem',
              fontSize: '0.8rem',
              background: 'none',
              mr: 2,
              textDecoration: 'none',
              position: 'relative',
              '&:hover': {
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '1px',
                  height: '2px',
                  backgroundColor: 'black',
                },
              },
              
            }}
            className={location.pathname === `/category/${item.toLowerCase()}` ? 'active' : ''}
          >
            {item}
          </Button>
        ))}
      </Toolbar>
    </Box>
  );
}

export default NavCategory;
