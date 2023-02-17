import './App.css';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [posts, setPosts] = useState('[]');
  useEffect(() => {
     fetch('http://127.0.0.1:5000/accounts')
        .then((response) => response.json()
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        }));
  }, []);
  return (
    <>
      <h1>Algorand Auction Demo dApp</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
          <p>{JSON.stringify(posts)}</p>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
