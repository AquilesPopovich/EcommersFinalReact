import { useState, useEffect } from "react"

import { useParams } from "react-router-dom";
import {ItemDetail} from './ItemDetail';
import NavCategory from './NavCategory'
import { CircularProgress, Container, Box } from '@mui/material';
import {doc,getDoc} from 'firebase/firestore'
import { db } from "../firebase/config";

export const ItemDetailContainer = props => { 
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);


    const {id} = useParams()

    useEffect(() => {

      const docRef = doc(db, "productos", id);
      getDoc(docRef)
        .then((resp) => {
          setProductos(
            {...resp.data(), id: resp.id}
          )
        })
        .finally(() => {
            setLoading(false); 
          });
    }, [id])
return( 
    
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
      </Box>): <ItemDetail productos={productos}/>} 
    </Container>
)
}