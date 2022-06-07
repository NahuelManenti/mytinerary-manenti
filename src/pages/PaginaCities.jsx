import React from 'react'
import Box from '@mui/material/Box';
import '../style/Mantenimiento.css';
// import { Link as LinkRouter } from 'react-router-dom'

export default function paginaCities() {
  return (
    <Box className='mantenimiento-center'
    sx={{
      backgroundColor: 'primary.white',
      '&:hover': {
        backgroundColor: 'secondary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}>
    <p>En mantenimiento</p>
    </Box>
  )
}
