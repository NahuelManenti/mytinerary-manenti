import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';


export default function CardDetails(props) {
  return (
    <Card sx={{ 
        maxWidth:1920,
        height: '100%',
        width: '100%'
       }}  className="centerCardAndFilter1">
        <CardActionArea className="centerCardAndFilter" >
        <CardContent className='colorBlackCardAndFilter'></CardContent>
          <CardMedia className='imgPageCitiesDetails'
            component="img"
            // height="263"
            image={props.citySearch?.image}
            alt={props.citySearch?.name}
          />
          <CardContent className='colorBlackCardAndFilter'>
            <Typography gutterBottom variant="h4" component="div">
              {props.citySearch?.name}
            </Typography>
             <Typography gutterBottom variant="h7" component="div">
            {props.citySearch?.description}
            </Typography> 
          </CardContent>
        </CardActionArea>
      </Card>
  )
}
