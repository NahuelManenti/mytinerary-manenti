//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import {useDispatch, useSelector} from 'react-redux'

export default function SnackBar () {

    const message = useSelector(store => store.userReducer.snackbar)
    const dispatch = useDispatch()
  // console.log(message)
    const handleClose = () => {
        dispatch({
            type: 'message',
            payload: {view: false, message: '', success: false}
        })
    }
    const action = (
        <Box className='fredokaFont' sx={{
            width: '100%',
            backgroundColor: message.success ? 'rgb(036, 173, 009)':'rgb(255, 000, 000)',
            color: 'white',
            borderRadius: '4px',
            padding: '4px',
            fontWeight: '400'}}>
            {(typeof message.message) === "string" ? (<p>{message.message}</p>) : <div>{message.message.map((message,index) =><p key={index}>{message.message}</p>)}</div>
            }
        </Box>
    )
    return (
        <Snackbar
            open={message.view}
            autoHideDuration={4000}
            onClose={handleClose}
            action={action}
            message={
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="large" />
                </IconButton>
            } 
        />
    )
}



