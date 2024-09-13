import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import PicArt1 from "../assets/icons/carbon_notebook-reference.svg";
import picArt2 from "../assets/icons/Vector.svg";
import picArt3 from "../assets/icons/Robot.svg";
import picArt4 from "../assets/icons/IdentificationCard.svg";

const HackathonAIChallenge = () => {
  return (
    <Grid container direction="column" style={{ height: '100%', paddingLeft: '20px', paddingBottom: '60px' }}>
      <Grid item style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', paddingTop: 60, paddingBottom: 60 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Arial',
            fontWeight: 600,
            fontSize: '42px',
            textAlign: 'center', 
          }}
        >
          <span style={{ color: 'black', marginRight: '4px' }}>Why Participate in</span>
          <span style={{ color: 'lightgreen' }}> AI Challenges?</span>
        </Typography>
      </Grid>

      <Grid container item justifyContent="center" spacing={4} style={{ marginBottom: '32px' }}>
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              padding: '16px',
              backgroundColor: '#eff6ff',
              borderRadius: '20px',
              width: '480px', 
              height: '220px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img src={PicArt1} alt="Prove Your Skills" style={{ width: '50px', height: 'auto', marginTop: '30px', marginBottom: '15px' }} />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Arial',
                fontWeight: 600,
                fontSize: '24px',
                marginBottom: '8px',
              }}
            >
              Prove Your Skills
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Arial',
                fontSize: '16px',
                color: 'grey',
                fontWeight: '600',
              }}
            >
              Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
            </Typography>
          </Paper>
        </Grid>

        <Grid item>
          <Paper
            elevation={3}
            sx={{
              padding: '16px',
              backgroundColor: '#eff6ff',
              borderRadius: '20px',
              width: '480px',
              height: '220px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img src={picArt2} alt="Learn from community" style={{ width: '50px', height: 'auto', marginTop: '30px', marginBottom: '15px' }} />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Arial',
                fontWeight: 600,
                fontSize: '24px',
                marginBottom: '8px',
              }}
            >
              Learn from community
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Arial',
                fontSize: '16px',
                color: 'grey',
                fontWeight: '600',
              }}
            >
              One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container item justifyContent="center" spacing={4} style={{ marginBottom: '32px' }}>
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              padding: '16px',
              backgroundColor: '#eff6ff',
              borderRadius: '20px',
              width: '480px',
              height: '220px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img src={picArt3} alt="Challenge yourself" style={{ width: '50px', height: 'auto', marginTop: '30px', marginBottom: '15px' }} />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Arial',
                fontWeight: 600,
                fontSize: '24px',
                marginBottom: '8px',
              }}
            >
              Challenge yourself
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Arial',
                fontSize: '16.5px',
                color: 'grey',
                fontWeight: '600',
              }}
            >
              There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.
            </Typography>
          </Paper>
        </Grid>

        <Grid item>
          <Paper
            elevation={3}
            sx={{
              padding: '16px',
              backgroundColor: '#eff6ff',
              borderRadius: '20px',
              width: '480px',
              height: '220px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img src={picArt4} alt="Earn recognition" style={{ width: '50px', height: 'auto', marginTop: '30px', marginBottom: '15px' }} />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Arial',
                fontWeight: 600,
                fontSize: '24px',
                marginBottom: '8px',
              }}
            >
              Earn recognition
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Arial',
                fontSize: '16px',
                color: 'grey',
                fontWeight: '600',
              }}
            >
              You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <div style={{ height: '50px' }}></div>
    </Grid>
  );
}

export default HackathonAIChallenge;
