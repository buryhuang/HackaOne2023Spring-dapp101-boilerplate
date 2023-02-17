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
  const [accounts, setAccounts] = useState('[]');
  // useEffect(() => {
  //    fetch('http://127.0.0.1:5000/accounts')
  //       .then((response) => response.json()
  //       .then((data) => {
  //          console.log(data);
  //          setPosts(data);
  //       })
  //       .catch((err) => {
  //          console.log(err.message);
  //       }));
  // }, []);


  function createAccounts() {
      alert('Hello!');
      console.log("createAccounts");
      fetch('http://127.0.0.1:5000/accounts')
          .then((response) => response.json()
              .then((data) => {
                  console.log(data);
                  setAccounts(data);
              })
              .catch((err) => {
                  console.log(err.message);
              }));
  }

  return (
    <>
      <h1>Algorand Auction Demo dApp</h1>

        <Grid container spacing={2}>
            <button onClick={() => createAccounts()} >
                Create Accounts
            </button>
            <div>
                {JSON.stringify(accounts)}
            </div>
        </Grid>
      <Grid container spacing={2}>

        <Grid item xs={4}>
          <Item>Creator</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Seller</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Bidder</Item>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
