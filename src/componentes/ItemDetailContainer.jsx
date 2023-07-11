import { useState, useEffect } from "react"
import { pedirDatos } from '../helpers/pedirDatos';
import { useParams } from "react-router-dom";
import {ItemDetail} from './ItemDetail';
import NavCategory from './NavCategory'
import { CircularProgress, Container, Box } from '@mui/material';

export const ItemDetailContainer = props => { 
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);


    const {id} = useParams()

    useEffect(() => {
        setLoading(true);
      pedirDatos()
        .then((resultado) =>{ 
            const productEncontrado = resultado.find((product) => product.id == id);
            setProductos(productEncontrado || {});
        }).finally(() => {
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