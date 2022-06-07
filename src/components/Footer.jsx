import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import "../style/Footer.css";

export default function Footer() {
  return (
    <div className='container.color'>
    
      <CssBaseline />
      <div className='Footer' maxWidth="100">
        <Box className='Footer-flex' sx={{ bgcolor: '#12496e', height: '30vh' }}>
        <div>
          <h3>Redes</h3>
          <div className='ico-flex'>  
            <div>
              <p>insta</p>
              <p>insta</p>
            </div>
            <div>
              <p>insta</p>
              <p>insta</p>
            </div>
          </div>
        </div>
        <div className='navigate-flex'>
          <h3>Navigate</h3>
          <p>Home</p>
          <p>Cities</p>
        </div>
        <div>
          <h3>Policies</h3>
          <div>
            <p>Legal Warning</p>
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
            <p>Quality Policy</p>
          </div>
        </div>
        </Box> 
      </div>
      <h4 className='down-footer'>Copyright © - MYTINERARY All Rights Reserved.</h4>
      </div>
  );
}
