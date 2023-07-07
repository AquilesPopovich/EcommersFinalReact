import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../assets/logo.png";

const pages = [
  { name: 'Home', path: '#' },
  { name: 'Products', path: '#' },
  { name: 'Contact', path: '#' },
];

function NavBar() {
  return (
    <AppBar position="static" sx={{ background: 'black' }}>
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            mx: 'auto',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: '40px' }} />
          </Link>
        </Typography>

        <Box sx={{ flexGrow: 1, justifyContent: 'flex-end' }}>
          {pages.map((page) => (
            <Button
              component={Link}
              to={page.path}
              key={page.name}
              sx={{ mx: 2, color: 'white' }}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        <CartWidget />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
