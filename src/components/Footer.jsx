import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className='Footer' maxWidth="100">
        <Box sx={{ bgcolor: '#cfe8fc', height: '15vh' }} />
      </Container>
    </React.Fragment>
  );
}
