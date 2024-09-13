import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from '../Navbar/DPhi-logo.png';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'flex-start' }}>
        <img 
          src={logo} 
          alt="DPhi Logo" 
          style={{ height: '50px', marginRight: '5px', marginLeft: '50px' }} // Adjust marginLeft for space
        />
        {/* Brand Name */}
        <Typography variant="h6" sx={{ color: '#333', fontWeight: 'bold', fontSize: '16px' }}>
          DPhi
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
