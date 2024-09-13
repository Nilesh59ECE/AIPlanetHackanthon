import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import PicArt1 from '../assets/icons/Group 1000002515.svg';
import PicArt2 from "../assets/icons/Group 1000002516.svg";
import PicArt3 from "../assets/icons/Group 1000002518.svg";

function HackathonIcon() {
  return (
    <Paper
      sx={{
        backgroundColor: "#002B3D",
        paddingTop: 12,
        paddingBottom: 12,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none', 
        boxShadow: 'none', 
        margin: 0, 
        borderRadius: 0,
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item style={{ marginLeft: 120, marginRight: 30 }}> 
          <img src={PicArt1} alt="My Icon" style={{ width: '105%', height: 'auto' }} />
        </Grid>

        <Grid item>
          <Grid container direction="column" spacing={0}>
            <Grid item>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '20px',
                  fontFamily: 'Arial',
                  marginRight: 15,
                  marginBottom: 0,
                }}
              >
                100K+
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontWeight: 400,
                  fontSize: '16px',
                  fontFamily: 'Arial',
                  marginRight: 15,
                }}
              >
                AI model Submission
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: '11px',
              fontFamily: 'Arial',
              marginRight: 10,
              lineHeight: 1,
              transform: 'scaleY(3.8)',
            }}
          >
            |
          </Typography>
        </Grid>

        <Grid item style={{ marginRight: 30 }}>
          <img src={PicArt2} alt="My Icon" style={{ width: '105%', height: 'auto' }} />
        </Grid>

        <Grid item>
          <Grid container direction="column" spacing={0}>
            <Grid item>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '20px',
                  fontFamily: 'Arial',
                  marginRight: 15,
                  marginBottom: 0,
                }}
              >
                50K+
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontWeight: 400,
                  fontSize: '16px',
                  fontFamily: 'Arial',
                  marginRight: 15,
                }}
              >
                Data Scientists
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: '11px',
              fontFamily: 'Arial',
              marginRight: 10,
              lineHeight: 1,
              transform: 'scaleY(3.8)',
            }}
          >
            |
          </Typography>
        </Grid>

        <Grid item style={{ marginRight: 20 }}>
          <img src={PicArt3} alt="My Icon" style={{ width: '105%', height: 'auto' }} />
        </Grid>

        <Grid item>
          <Grid container direction="column" spacing={0}>
            <Grid item>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '20px',
                  fontFamily: 'Arial',
                  marginRight: 15,
                  marginBottom: 0,
                }}
              >
                100+
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontWeight: 400,
                  fontSize: '16px',
                  fontFamily: 'Arial',
                  marginRight: 15,
                }}
              >
                AI Challenges hosted
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default HackathonIcon;
