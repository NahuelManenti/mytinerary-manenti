
import '../style/Header.css';
import React from 'react';
// import {
//   createTheme,
//   responsiveFontSizes,
  // ThemeProvider,
// } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

// let theme = createTheme();
// theme = responsiveFontSizes(theme);

export default function Header() {
  return (
    <div className="imgBackground">
      <Box>
        <Typography className="h2Main" variant="h3">Find your perfect trip, </Typography>
        <Typography className="h2Main" variant="h3">designed by insiders who know and love</Typography>
        <Typography className="h2Main" variant="h3"> their cities!</Typography>
      </Box>
    </div>
  );
}