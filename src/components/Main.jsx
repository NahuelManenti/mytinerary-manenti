// import { Box } from "@mui/material";
// import React from "react";
// import '../style/Main.css';

// function Main (){

//     return(
        
//         <Box className="img-fondo">
//             <h2  className="h2-main">Find your perfect trip, designed by insiders who know and love their cities! </h2>
//         </Box>
        


//     )
// }

// export default Main
import '../style/Main.css';
import React from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveFontSizes() {
  return (
    <div className="img-fondo">
      <Box>
        <Typography className=" h2-main" variant="h3">Find your perfect trip, </Typography>
        <Typography className=" h2-main" variant="h3">designed by insiders who know and love</Typography>
        <Typography className=" h2-main" variant="h3"> their cities!</Typography>
      </Box>
    </div>
  );
}