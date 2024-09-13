import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Paper, InputAdornment, Popover, Box, Checkbox, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'; // Import ArrowDropDown icon
import ArrowDropUp from '@mui/icons-material/ArrowDropUp'; // Import ArrowDropUp icon
import CardsItem from './CardsItem';

const HackathonCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open); 
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
    setOpen(false); 
  };

  const popoverOpen = Boolean(anchorEl);

  return (
    <Paper 
      sx={{ 
        backgroundColor: '#002B3D', 
        minHeight: '100vh', 
        padding: '20px 0',
      }}
    >
      <Grid 
        container 
        direction="column" 
        alignItems="center" 
        spacing={3}
      >
        <Grid item sx={{ marginTop: '80px', marginBottom: '20px' }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: 'white', 
              fontWeight: 'bold',
              textAlign: 'center' 
            }}
          >
            Explore Challenges
          </Typography>
        </Grid>

        <Grid 
          item 
          container 
          justifyContent="center" 
          alignItems="center" 
          spacing={2} 
          sx={{ width: '100%', maxWidth: '800px' }} 
        >
          <Grid item xs={9.5} sm={6.5} sx={{ marginLeft: '200px', marginBottom: '120px' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ marginLeft: '25px' }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  height: '50px', 
                  '& input': {
                    padding: '8px 12px',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={2} sx={{ marginBottom: '120px' }}>
            <Button
              variant="contained"
              sx={{ 
                backgroundColor: 'white', 
                color: 'black',
                fontSize: '14px',
                borderRadius: '15px', 
                height: '50px', 
                width: '120px', 
                fontWeight: '400',
                display: 'flex',
              }}
              onClick={handleFilterClick}
            >
              Filter
              {open ? <ArrowDropUp sx={{ marginLeft: '10px', fontSize: '24px' }} /> : <ArrowDropDown sx={{ marginLeft: '10px', fontSize: '24px' }} />}
            </Button>

            <Popover
              open={popoverOpen}
              anchorEl={anchorEl}
              onClose={handleFilterClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              PaperProps={{
                style: {
                  padding: '20px',
                  width: '300px',
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Status
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                {['All', 'Active', 'Upcoming', 'Past'].map((status) => (
                  <FormControlLabel
                    key={status}
                    control={<Checkbox name={status} />}
                    label={status}
                  />
                ))}
              </Box>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Level
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {['Easy', 'Medium', 'Hard'].map((level) => (
                  <FormControlLabel
                    key={level}
                    control={<Checkbox name={level} />}
                    label={level}
                  />
                ))}
              </Box>
            </Popover>
          </Grid>
        </Grid>
      </Grid>

      <Grid 
        container 
        sx={{ 
          backgroundColor: '#003145', 
          padding: '40px 0',
        }}
      >
        <CardsItem />
      </Grid>
    </Paper>
  );
};

export default HackathonCard;
