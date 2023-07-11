import React, { useState, useEffect } from 'react';
import { pedirDatos } from '../helpers/pedirDatos';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { CircularProgress, Container, Box } from '@mui/material';
import NavCategory from './NavCategory';

export const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true); 

    pedirDatos()
      .then((resultado) => {
        if (id) {
          setProductos(resultado.filter((producto) => producto.category === id));
        } else {
          setProductos(resultado);
        }
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [id]);

  return (
    <Container>
      <NavCategory/>
      {loading ? (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress size={80} />
      </Box>
      ) : (
        <ItemList productos={productos} />
      )}
    </Container>
  );
};
