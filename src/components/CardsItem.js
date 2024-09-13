import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Chip } from '@mui/material';
import { styled } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import hackathons from '../data/dummy.js';
import { format, differenceInMinutes, parseISO } from 'date-fns';

const StyledCard = styled(Card)({
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  textAlign: 'center',
  paddingBottom: '20px',
  width: '100%',
  maxWidth: '340px',
  height: '440px',
  margin: 'auto',
  position: 'relative',
  backgroundColor: '#fff',
});

const StatusChip = styled(Chip)(({ status }) => ({
  fontWeight: 'bold',
  padding: '5px 10px',
  borderRadius: '10px',
  marginTop: '10px',
  marginBottom: '10px',
  fontSize: '14px',
  backgroundColor:
    status === 'Active' ? '#cef5b8' : status === 'Upcoming' ? '#fef3c7' : '#fee2e2',
  color:
    status === 'Active' ? '#5ea138' : status === 'Upcoming' ? '#595c58' : '#595c58',
}));

const HackathonTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '16px',
  marginBottom: '10px',
});

const CountdownText = styled(Typography)({
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#3c3d3',
});

const EndedText = styled(Typography)({
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#3c3d3',
});

const ParticipateButton = styled(Button)({
  backgroundColor: '#16a34a',
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'none',
  marginTop: '15px',
  padding: '8px 20px',
  borderRadius: '10px',
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "d MMMM yyyy 'at' hh:mm a");
};

const calculateCountdown = (dateString) => {
  const now = new Date();
  const targetDate = parseISO(dateString);
  const totalMinutes = differenceInMinutes(targetDate, now);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;
  return { days, hours, minutes };
};

const CardsItem = () => {
  const navigate = useNavigate();

  const handleParticipateClick = (hackathonId) => {
    navigate(`/participate/${hackathonId}`);
  };

  return (
    <div style={{ backgroundColor: '#003145', padding: '80px 0' }}>
      <Grid container spacing={6} justifyContent="center">
        {hackathons.map((hackathon, index) => (
          <Grid item xs={12} sm={6} md={3.02} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledCard>
              <CardMedia
                component="img"
                height="160"
                image={hackathon.image}
                alt={hackathon.name}
                sx={{ borderRadius: '15px 15px 0 0' }}
              />

              <CardContent sx={{ padding: '10px 30px' }}>
                <StatusChip
                  label={hackathon.status === 'Active' ? 'Active' : hackathon.status === 'Upcoming' ? 'Upcoming' : 'Past'}
                  status={hackathon.status}
                  sx={{padding: '8px 30px'}}
                />

                <HackathonTitle variant="h6" component="div"
                sx={{ paddingLeft: '16px', paddingRight: '8px', fontSize: '17px', marginBottom: '20px' }}
                >
                  {hackathon.name}
                </HackathonTitle>

                {hackathon.status === 'Active' ? (
                  <CountdownText style={{ fontSize: '15px' }}>
                  Ends in
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    {`${String(calculateCountdown(hackathon.endDate).days).padStart(2, '0')} : ${String(calculateCountdown(hackathon.endDate).hours).padStart(2, '0')} : ${String(calculateCountdown(hackathon.endDate).minutes).padStart(2, '0')}`}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', fontSize: '10px' }}>
                    <div style={{ marginRight: '10px' }}>Days</div>
                    <div style={{ marginRight: '10px' }}>Hours</div>
                    <div>Mins</div>
                  </div>
                </CountdownText>
                ) : hackathon.status === 'Upcoming' ? (
                  <CountdownText style={{ fontSize: '15px' }}>
                    Starts in
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    {`${String(calculateCountdown(hackathon.startDate).days).padStart(2, '0')} : ${String(calculateCountdown(hackathon.startDate).hours).padStart(2, '0')} : ${String(calculateCountdown(hackathon.startDate).minutes).padStart(2, '0')}`}
                     </div>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', fontSize: '10px' }}>
                <div style={{ marginRight: '10px' }}>Days</div>
                <div style={{ marginRight: '10px' }}>Hours</div>
                <div>Mins</div>
                  </div>
                  </CountdownText>
                ) : (
                  <EndedText style={{ fontSize: '15px', marginBottom: '13px' }}>
                    Ended on
                    <div style={{ marginTop: '5px', fontSize: '18px' }}>{formatDate(hackathon.endDate)}</div>
                  </EndedText>
                )}
              </CardContent>

              <ParticipateButton
                variant="contained"
                size="large"
                startIcon={<CheckCircleIcon />}
                onClick={() => handleParticipateClick(hackathon.id)}
              >
                Participate Now
              </ParticipateButton>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardsItem;
