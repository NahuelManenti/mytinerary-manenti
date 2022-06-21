//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

//importo los estilos
import '../styles/styles.css'

export default function TinerariesNotSearch () {
    return (
        <>
            <Box sx={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100px',
                backgroundColor: 'rgb(207, 238, 228)',
                marginTop: '10px'}}>
                <Typography variant="h6">not <label className='festiveFont bigAnounce'> Tineraries </label> Today!</Typography>
            </Box>
        </>
    )
}