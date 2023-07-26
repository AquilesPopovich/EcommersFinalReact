import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button, Container, Typography} from '@mui/material';

export const Home = () => {
  const { user, logOut } = useAuth();
 

  const handleLogOut = async () => {
   try {
    await logOut()
   } catch (error) {
    console.log(error)
   }
  }

    return (<Container sx={{display: 'flex',flexDirection: 'column',alignItems: 'center', mt: 4}}>
    <Typography sx={{fontSize: '2rem',fontWeight: 'bold', mb: 2}}>Welcome ${user.displayName || user.email}</Typography>

    <Button sx={{backgroundColor: '#212121',color: '#ffffff','&:hover': {backgroundColor: '#333'}}} onClick={handleLogOut}>Logout</Button>

    </Container>);
  
};
