import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const truncateTitle = (title, maxWords) => {
  const words = title.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return title;
};

const Item = ({ productos }) => {
  const truncatedTitle = truncateTitle(productos.title, 6);

  return (
    <Card sx={{ m: 3, height: '450px', width: '350px', display: 'flex' , flexDirection: 'column', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardActionArea style={{ flexGrow: 1 }}>
        <CardMedia component='img' image={productos.image} height='270' width='350' sx={{ borderRadius: '15px' }} alt={productos.description} />
        <CardContent>
          <Typography variant='h5'>
            {truncatedTitle}
          </Typography>
          <Typography component='p' variant='body2'>Precio: <span style={{ color: 'green' }}>${productos.price}</span></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/item/${productos.id}`}>
          <Button sx={{ width: '100%' }} variant='contained'>Ver Producto</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;


