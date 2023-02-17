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
  const [accountsStatus, setAccountsStatus] = useState('Not Started.');
  const [aliceAddress, setAliceAddress] = useState('');
  const [bobAddress, setBobAddress] = useState('');
  const [carlaAddress, setCarlaAddress] = useState('');

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
      console.log("createAccounts");
      setAccountsStatus("Creating Accounts");
      fetch('http://127.0.0.1:5000/auction/start')
          .then((response) => response.json()
              .then((data) => {
                    console.log(data);
                    setAccountsStatus("Accounts created");
                    setAliceAddress(data.seller);
                    setBobAddress(data.creator);
                    setCarlaAddress(data.bidder);
              })
              .catch((err) => {
                  console.log(err.message);
              }));
  }

  return (
    <>
      <h1>Algorand Auction Demo dApp</h1>

        <Grid container spacing={2}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
                <button style={{minHeight: "60px"}} onClick={() => createAccounts()} >
                    Create Accounts
                </button>
                {accountsStatus}
            </Grid>
            <Grid item xs={2}>
            </Grid>

        </Grid>
      <Grid container spacing={2}>

        <Grid item xs={4}>
            <Item>Alice (seller account)</Item>
            <Item>Address: {aliceAddress}</Item>
        </Grid>
        <Grid item xs={4}>
            <Item>Bob (auction creator account)</Item>
            <Item>Address: {bobAddress}</Item>
        </Grid>
        <Grid item xs={4}>
            <Item>Carla (bidder account)</Item>
            <Item>Address: {carlaAddress}</Item>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
