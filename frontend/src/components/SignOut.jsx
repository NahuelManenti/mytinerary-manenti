import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';


function SignOutComp() {
        const LogedUser = useSelector(store => store.userReducer.user)
        const dispatch = useDispatch()

    function SignOut() {
         dispatch(userActions.signOutUser(LogedUser.email))
}

    return (
             <MenuItem>
                <LinkRouter to={'/login'}>
                     <Typography onClick={SignOut} sx={{color: 'black'}}>Logout</Typography>
                </LinkRouter>
            </MenuItem>   
  );
};
export default SignOutComp;





// //importo de librerias externas
// import React from 'react'
// import Typography from '@mui/material/Typography'
// import {Link as LinkRouter} from "react-router-dom"
// import MenuItem from '@mui/material/MenuItem'

// import {connect} from 'react-redux';
// import userActions from '../redux/actions/userActions'

// function SignOut(props) {
//     function signOut() {
// 		props.signOutUser(props.user.email)
// 	}
//     return ( //returno el HTML
//         <MenuItem>
//             <LinkRouter to={'/login'}>
//                 <Typography onClick={signOut} sx={{color: 'black'}}>Logout</Typography>
//             </LinkRouter>
//         </MenuItem>       
//     )
// }

// const mapDispatchToProps = {
// 	signOutUser: userActions.signOutUser,
// }

// const mapStateToProps = (state) => {
// 	return {
// 		user: state.userReducer.user,
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignOut)