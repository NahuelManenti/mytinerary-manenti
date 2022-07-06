

import Box from '@mui/material/Box'
import '../style/activities.css'
import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



export default function Activities (allActivities) {

    const activities = allActivities
    console.log(activities)

    return (
        <Box className='containerActivities'>
         
          {activities.allActivities.map( everyAct =>(
          <ImageListItem key={everyAct._id} className='imgActivities'>
            <img className='borderActivity'
              src={everyAct.activity}
              alt={everyAct.activity}
              loading="lazy"
            />
            <ImageListItemBar className='borderActivity'
              title={everyAct.name}
            />
          </ImageListItem>
          ))} 
 
        
      </Box>
    );
  }


// <Box sx={{
//     display: 'flex',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'space-between'}}>
//     {activities.allActivities.map( everyAct =>
//         <div key={everyAct._id}>
//             <Box className='typografyActivities' sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 textAlign: 'center',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: 'rgba(000, 000, 058, 0.4)',
//                 marginLeft: "2px",
//                 marginRight: "2px"
//                 }}>
                
//                 <Typography  variant="h4" sx={{color: 'black'}}>{everyAct.name}</Typography>
//             </Box>
//             <Box  sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 textAlign: 'center',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginLeft: "2px",
//                 marginRight: "2px"
//                 }}>
//                 <img  src={process.env.PUBLIC_URL+`${everyAct.activity}`} alt={everyAct.activity} className='imgActivities' />
//             </Box>
            
//         </div>
//     )}
// </Box>