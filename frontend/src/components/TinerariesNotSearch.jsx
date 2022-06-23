//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';



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
                color: 'black',
                backgroundColor: 'rgb(237, 238, 228)',
                marginBottom: '25px',
                marginTop: '25px'}}>
                <Typography variant="h5">Not  Itineraries  Today!</Typography>
            </Box>
        </>
    )
}