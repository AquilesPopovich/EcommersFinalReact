import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { CircularProgress, Container, Box } from '@mui/material';
import NavCategory from './NavCategory';
import {db} from '../firebase/config'

export const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  

  useEffect(() => {
    setLoading(true); 

    const productosRef = collection(db, "productos")

    const q = query(productosRef, where('category', '==', id));


    getDocs(q)
      .then((resp) =>{
        setProductos(
          resp.docs.map((doc) =>{
            return {...doc.data(), id: doc.id}
          })
        )
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
