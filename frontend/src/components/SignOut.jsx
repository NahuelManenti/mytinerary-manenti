//importo de librerias externas
import React from 'react'
import Typography from '@mui/material/Typography'
import {Link as LinkRouter} from "react-router-dom"
import MenuItem from '@mui/material/MenuItem'

import {connect} from 'react-redux';
import userActions from '../redux/actions/userActions'

function SignOut(props) {
    function signOut() {
		props.signOutUser(props.user.email)
	}
    return ( //returno el HTML
        <MenuItem>
            <LinkRouter to={'/login'}>
                <Typography onClick={signOut} sx={{color: 'black'}}>Logout</Typography>
            </LinkRouter>
        </MenuItem>       
    )
}

const mapDispatchToProps = {
	signOutUser: userActions.signOutUser,
}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)