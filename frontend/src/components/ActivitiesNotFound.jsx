
import Box from '@mui/material/Box'
import '../style/activities.css'
import * as React from 'react';

import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';



export default function ActivitiesNotFound () {


    return (
        <Box className='containerActivities'>
        
          <ImageListItem className='imgActivities'>
            <img className='borderActivity'
              src="https://pearlmargaret.com/wp-content/uploads/2017/08/itineraryplanning-image-1140x700.jpg"
              alt='NotItinerary'
              loading="lazy"
            />
            <Typography className='borderActivityNot'
              title="Not itinerary"
            />
          </ImageListItem>
      </Box>
    );
  }