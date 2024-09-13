
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const HackathonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hackathon, setHackathon] = useState(null);


  if (!hackathon) return <div>Loading...</div>;

  return (
    <div>
      <Typography variant="h3">{hackathon.name}</Typography>
      <Typography variant="body1">{hackathon.description}</Typography>
      <Typography variant="body2">Level: {hackathon.level}</Typography>
      <Typography variant="body2">
        Start Date: {new Date(hackathon.startDate).toLocaleDateString()}
      </Typography>
      <Typography variant="body2">
        End Date: {new Date(hackathon.endDate).toLocaleDateString()}
      </Typography>
      <img src={hackathon.image} alt={hackathon.name} style={{ width: '100%', height: 'auto' }} />
      <Link to={`/edit/${hackathon.id}`}>
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </Link>
      <Button variant="contained" color="secondary">
        Delete
      </Button>
    </div>
  );
};

export default HackathonDetails;
