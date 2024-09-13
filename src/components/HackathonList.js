import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography, Paper } from '@mui/material';
import HackathonCard from './HackathonCard';
import HackathonIcon from './HackathonIcon';
import HackathonAIChallenge from './HackathonAIChallenge';
import PicArt from "../assets/icons/PicsArt_04-14-04.42.svg";

const HackathonList = () => {

  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(${PicArt})`,
          backgroundPosition: 'right', 
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat', 
          backgroundColor: '#003145', 
          paddingTop: 8,
          paddingLeft: 16,
          paddingRight: 8, 
          paddingBottom: 8, 
          color: 'white', 
          margin: 0, 
          border: 'none', 
          boxShadow: 'none',
        }}
        square 
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Grid container alignItems="flex-start">
              <Grid item>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start', 
                  }}
                >
                  <div
                    style={{
                      width: '11px', 
                      height: '120px', 
                      backgroundColor: '#FFCE5C', 
                      marginRight: '50px', 
                    }}
                  />
                  <div>
                  <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: '45px', fontWeight: 'bold', marginBottom: '40px' }}>
                  Accelerate Innovation<br />
                  with Global AI Challenges
                  </Typography>

                    <Typography variant="body1" gutterBottom sx={{ fontSize: '20px', fontWeight: '400', maxWidth: "550px", marginBottom: '30px' }}>
                      AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to the test on diverse datasets allowing you to foster learning through competitions.
                    </Typography>
                    <Link to="/create">
                    <Button
  variant="contained"
  sx={{
    backgroundColor: 'white',
    color: '#000000',
    borderRadius: '10px',
    fontWeight: 'bold',
    textTransform: 'none',
    padding: '8px 20px', 
    fontSize: '18px',
  }}
>
  Create Challenge
</Button>

                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <HackathonIcon />

      <HackathonAIChallenge />
      <HackathonCard />
    </>
  );
};

export default HackathonList;
