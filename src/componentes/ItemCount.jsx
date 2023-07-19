import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";

export const ItemCount = ({sumar,restar, cantidad, agregar}) => {

   

    return(
        <>
        <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" alignItems="center" mb={2}>
        <Button variant="contained" onClick={restar} color="error" disabled={cantidad === 0}>
          -
        </Button>
        <Typography variant="body1" mx={2}>
          {cantidad}
        </Typography>
        <Button variant="contained" color="success" onClick={sumar}>
          +
        </Button>
      </Box>
      <Button
        variant="contained"
        onClick={agregar}
        disabled={cantidad === 0}
        sx={{ width: '60%', mt: 4, backgroundColor: '#212121', color: '#ffffff' }}
      >
        Agregar al Carrito
      </Button>
    </Box>
        </>
    )
}