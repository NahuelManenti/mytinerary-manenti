import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import "../style/Footer.css";
//import icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className='container.color'>
    
      <CssBaseline />
      <div className='Footer' maxWidth="100">
        <Box className='Footer-flex' sx={{ bgcolor: '#12496e', height: '30vh' }}>
        <div className='icon-flex'>
          <h3 className='h3-footer'>Redes</h3>  
            <div>
              <FacebookIcon/>
              <InstagramIcon/>
            </div>
            <div>
              <WhatsAppIcon/>
              <LinkedInIcon/>
            </div>
        </div>
        <div className='navigate-flex'>
          <h3 className='h3-footer'>Navigate</h3>
          <p>Home</p>
          <p>Cities</p>
        </div>
        <div className='Policies-flex'>
          <h3 className='h3-footer'>Policies</h3>
            <p>Legal Warning</p>
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
            <p>Quality Policy</p>
        </div>
        </Box> 
      </div>
      <h4 className='down-footer'>Copyright © - MYTINERARY All Rights Reserved.</h4>
      </div>
  );
}
