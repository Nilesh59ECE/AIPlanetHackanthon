import React from 'react';
import { Grid, Typography, Button, Chip, Paper } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CustomIcon from "../assets/icons/carbon_skill-level-basic.svg";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Participate = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const handleEditClick = () => {
        console.log(id); 
        if (id) {
            navigate(`/editform/${id}`);
        } else {
            console.error('Hackathon ID is undefined or null');
        }
    };
  return (
    <Grid
      container
      spacing={3}
      sx={{
        justifyContent: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        container
        spacing={3}
        sx={{
          backgroundColor: '#033c4f',
          color: 'white',
          padding: '40px 20px',
          marginTop: '30px', 
        }}
      >
        <Grid item xs={12} container justifyContent="center">
          <Paper
            elevation={3}
            sx={{
              padding: '6px 22px',
              display: 'flex',
              backgroundColor: '#f8c34a',
              borderRadius: '5px',
              marginTop: '100px',
              marginRight: '750px', 
            }}
          >
            <AccessTimeIcon sx={{ marginRight: 1 }} />
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '15px' }}>
              Starts on 17th Jun'22 09:00 PM (India Standard Time)
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} container justifyContent="center">
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            fontSize="40px"
            fontFamily="Arial"
            sx={{ 
              marginRight: '470px',
              marginBottom: '10px' 
            }}
          >
            Data Sprint 72 – Butterfly Identification
          </Typography>
        </Grid>

        <Grid item xs={12} container justifyContent="center">
          <Typography 
            variant="h4" 
            fontWeight="600px" 
            fontSize="19px"
            fontFamily="Arial"
            sx={{ 
              marginRight: '779px',
              marginBottom: '5px' 
            }}
          >
            Identify the class to which each butterfly belongs to
          </Typography>
        </Grid>

        <Grid item xs={12} container justifyContent="start">
          <Chip
            icon={<img src={CustomIcon} alt="Custom Icon" />}
            label="Easy"
            sx={{
              backgroundColor: '#e7f3f4',
              color: '#033c4f',
              fontWeight: 'bold',
              padding: '5px 10px',
              marginLeft: "150px",
              fontSize: "13px",
              borderRadius: '5px',
              marginBottom: '50px',
            }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        container
        spacing={3}
        sx={{
          backgroundColor: 'white', 
          padding: '20px 0',
          borderRadius: '5px', 
          marginTop: '0px', 
        }}
      >
        <Grid item xs={12} container alignItems="center" spacing={1} sx={{ padding: '0 150px' }}>
          <Grid item xs={6} container alignItems="center">
            <Typography 
              variant="h6"
              fontFamily="Arial"
              sx={{ 
                color: '#333', 
                fontSize: '20px',
                fontWeight: 'bold',
                textAlign: 'left',
                marginLeft: "180px",
                position: 'relative', 
                paddingBottom: '10px', 
                overflow: 'visible', 
              }}
            >
              Overview
              <span 
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '-20px', 
                  width: 'calc(100% + 40px)',
                  height: '4px',
                  backgroundColor: '#4caf50',
                  borderRadius: '5px',
                }}
              />
            </Typography>
          </Grid>

          <Grid item xs={6} container justifyContent="flex-end">
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'green',
                  border: '2px solid green', 
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: "14px",
                  borderRadius: '10px',
                  padding: '6px 29px',
                }}
                onClick={handleEditClick}
              >
                Edit
              </Button>
            </Grid>
            <Grid item sx={{ marginLeft: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  border: '2px solid red', 
                  color: 'red',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: "14px",
                  borderRadius: '10px',
                  padding: '6px 19px',
                }}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
  item
  xs={12}
  container
  justifyContent="center"
  alignItems="center"
  sx={{
    backgroundColor: '#fff',
    padding: '40px 20px',
  }}
>
  <Typography
    variant="body1"
    fontFamily="Arial"
    sx={{
        color: '#666', 
        textAlign: 'left',
        fontWeight: '600',
        fontSize: '18px',
        maxWidth: '980px',
        marginRight:'180px',
        marginBottom: '30px'
    }}
  >
    Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
  </Typography>

  <Typography
    variant="body1"
    fontFamily="Arial"
    sx={{
        color: '#666', 
        textAlign: 'left',
        fontWeight: '600',
        fontSize: '18px',
        maxWidth: '980px',
        marginRight:'180px',
        marginBottom: '30px'
    }}
  >
    An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.
  </Typography>

  <Typography
    variant="body1"
    fontFamily="Arial"
    sx={{
      color: '#5C5C5C', 
      textAlign: 'left',
      fontWeight:"600",
      fontSize: '18px',
      maxWidth: '980px',
      marginRight:'180px',
      marginBottom: '30px'
    }}
  >
    Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.
  </Typography>
</Grid>

    </Grid>
  );
};

export default Participate;
