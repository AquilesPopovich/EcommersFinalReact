import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button, Container, Typography} from '@mui/material';

export const Home = () => {
  const { user, logOut } = useAuth();
 

  const handleLogOut = async () => {
   await logOut()
  }

    return (<Container>
    <Typography>Welcome ${user.email}</Typography>

    <Button onClick={handleLogOut}>Logout</Button>

    </Container>);
  
};
