import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button, Container, Typography, Box, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

export const Home = () => {
  const { user, logOut, loading } = useAuth();
 

  const handleLogOut = async () => {
   await logOut()
  }

  if (loading) {
    <Typography>Loading</Typography>
  } 
    return (<Container>
    <Typography>Welcome ${user.email}</Typography>

    <Button onClick={handleLogOut}>Logout</Button>

    </Container>);
  
};
