import React from 'react'
import Box from '@mui/material/Box';
import '../style/Mantenimiento.css';


export default function PageCities() {
  return (
    <Box className='maintenanceCenter'
    sx={{
      backgroundColor: 'primary.white',
      '&:hover': {
        backgroundColor: 'secondary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}>
    <p>In Maintenance</p>
    </Box>
  )
}
