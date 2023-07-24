import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button, Container, Typography, Box, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate()

  const handleLogOut = async () => {
   await logOut()
   navigate('/login')
  }

  if (user) {
    return <Container>
    <Typography>Welcome ${user.email}</Typography>

    <Button onClick={handleLogOut}>Logout</Button>

    </Container>;
  } else {
    return <>Please log in to see your email.</>;
  }
};
