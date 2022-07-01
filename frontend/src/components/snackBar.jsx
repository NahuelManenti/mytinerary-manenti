//importo de librerias externas
import React from 'react'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import {useDispatch, useSelector} from 'react-redux'
import userActions from '../redux/actions/userActions'

export default function SnackBar () {

    const snackbar = useSelector(store => store.userReducer.snackbar)
    const dispatch = useDispatch()



   
    const handleClose = () => {
        dispatch({
            type: 'message',
            payload: {view: false, message: '', success: false}
        })
    }
    const action = (
        <Box className='fredokaFont' sx={{
            width: '100%',
            backgroundColor: snackbar.success ? 'green' : 'red',
            color: 'white',
            borderRadius: '4px',
            padding: '4px',
            fontWeight: '400'}}>
            {(typeof snackbar.message) === "string" ? (<p>{snackbar.message}</p>) : <div>{snackbar.message.map((message,index) =><p key={index}>{message.message}</p>)}</div>
            }
        </Box>
    )
    return (
        <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
            open={snackbar.view}
            autoHideDuration={2000}
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

// import React from 'react'
// import Box from '@mui/material/Box'
// import Snackbar from '@mui/material/Snackbar'
// import IconButton from '@mui/material/IconButton'
// import CloseIcon from '@mui/icons-material/Close'

// //importo los estilos


// //importo acciones de redux
// import {connect} from 'react-redux'
// import {useDispatch} from 'react-redux'

// function SnackBar(props) {
//     //console.log(props)
//     const dispatch = useDispatch()
//     const handleClose = () => {
//         dispatch({
//             type: 'message',
//             payload: {view: false, message: '', success: false}
//         })
//     }
//     const action = (
//         <Box sx={{
//             width: '100%',
//             backgroundColor: props.snackbar.success ? 'green':'red',
//             color: 'white',
//             borderRadius: '4px',
//             padding: '4px',
//             fontWeight: '400'}}>
//             {(typeof props.snackbar.message) === "string" ?
//                 (<p>{props.snackbar.message}</p>) :
//                 <div>{props.snackbar.message.map((message,index) =><p key={index}>{message.message}</p>)}</div>
//             }

//         </Box>
//     )

//     console.log(props.snackbar.view);
//     return (
//         <Snackbar
//             open={props.snackbar.view}
//             autoHideDuration={5000}
//             onClose={handleClose}
//             action={action}
//             message={
//                 <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
//                     <CloseIcon fontSize="small" />
//                 </IconButton>
//             } 
//         />
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         snackbar: state.userReducer.snackbar,
//     }
// }

// export default connect(mapStateToProps, null)(SnackBar)
