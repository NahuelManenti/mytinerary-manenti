
import React from 'react'
import "../style/CardAndFilter.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function NotFound() {

  return (
    <>
    <Card sx={{ maxWidth: 1200 }} className="centerCardAndFilter2">
      <CardActionArea className="centerCardAndFilter" >
      <CardContent className='colorBlackCardAndFilter'></CardContent>
        <CardMedia
          component="img"
          height="450"
          image=""
          alt=""
        />
        <CardContent className='colorBlackCardAndFilter'>
          <Typography gutterBottom variant="h5" component="div">
            Plz Research Citys
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          {item.country}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  </>
  )
}

