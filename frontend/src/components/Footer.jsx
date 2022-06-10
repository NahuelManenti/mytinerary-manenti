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
import { Link as LinkRouter } from 'react-router-dom'

export default function Footer() {
  const toTopSmooth = ()=>{
    window.scroll({
    behavior: 'smooth',
    left: 0,
    top: 0
    
  })
}
  return (
    <>
    
      <CssBaseline />
      <div className='footerGlobal'>
        <Box className='footerFlex' sx={{ bgcolor: '#12496e', height: '30vh' }}>
        <div className='iconFlex'>
          <h3 className='h3Footer'>Socials</h3>  
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
          <h3 className='h3Footer'>Navigate</h3>
          <LinkRouter className='textDecorationNone ' to={'/index'} onClick={toTopSmooth}><p className='navigateColor'>Home</p></LinkRouter>
          <LinkRouter className='textDecorationNone ' to={'/cities'} onClick={toTopSmooth}><p className='navigateColor'>Cities</p></LinkRouter>
        </div>
        <div className='policiesFlex'>
          <h3 className='h3Footer'>Policies</h3>
            <p>Legal Warning</p>
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
            <p>Quality Policy</p>
        </div>
        </Box> 
      </div>
      <h4 className='downFooter'>Copyright © - MYTINERARY All Rights Reserved.</h4>
      </>
  );
}
