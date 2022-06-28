import React, {useState} from 'react'
import Box from '@mui/material/Box'
import MailIcon from '@mui/icons-material/Mail'
import KeyIcon from '@mui/icons-material/Key'
import PersonIcon from '@mui/icons-material/Person'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import Typography from '@mui/material/Typography'
import {Link as LinkRouter} from "react-router-dom"

import userActions from '../redux/actions/userActions'; 
// import {connect} from 'react-redux'
import { useDispatch, useSelector  } from 'react-redux';//


import "../style/SignUp.css";


export default  function SignUp() { 

    const dispatch = useDispatch();
    const message = useSelector(store => store.userReducer.message)

    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [userPhoto,setUserPhoto] = useState("")
    const [country,setCountry] = useState("")
    const [mail,setMail] = useState("") 
    const [pass,setPass] = useState("")

    var countries = ["","Mexico","England","United States","South Asia","Spain","Argentina","Japan","Russia","Brazil","France","Other Country"]

    

    const handleSubmit = (event) => {
        event.preventDefault() //prevenimos la accion del submit
        const userData = {
			name: name,
            lastName: lastName,
            userPhoto: userPhoto,
            country: country,
            email: mail,
			password: pass,
			from: "SignUpForm"
		}
        dispatch(userActions.signUpUser(userData))
    }



  return (
    
        <Box className='containerSignUp'>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: '1',
                textAlign: 'center',
                alignItems: 'center',
                width: '100%',
                minHeight: '57.5vh',
                backgroundColor: 'rgb(21, 23, 166, 0.3)'}}>
                <Box className='opacitySignUp'
                     sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: '1',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    }}>
                    <>
                        <Typography variant="h4" className='registerSignUp'  sx={{padding: '10px' }}>Register</Typography>
                        <form onSubmit={handleSubmit} className=''>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(30, 44, 133)',
                                borderRadius: '50px'}}>
                                <label htmlFor="name">
                                <PersonIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(000, 000, 000)',
                                        borderRadius: '9px 0 0 9px',
                                        width: '40px',
                                        height: '30px'}}/>
                                </label>
                                <input type='text' name='name' id='name' placeholder='first name' className='myInputRegister' value={name} onChange={e=>setName(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(30, 44, 133)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="lastName">
                                <PersonIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(000, 000, 000)',
                                        borderRadius: '9px 0 0 9px',
                                        width: '40px',
                                        height: '30px'}}/>
                                </label>
                                <input type='text' name='lastName' id='lastName' placeholder='last name' className='myInputRegister' value={lastName} onChange={e=>setLastName(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(30, 44, 133)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="userPhoto">
                                <PhotoCameraIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(000, 000, 000)',
                                        borderRadius: '9px 0 0 9px',
                                        width: '40px',
                                        height: '30px'}}/>
                                </label>
                                <input type='text' name='userPhoto' id='userPhoto' placeholder="photo's URL" className='myInputRegister' value={userPhoto} onChange={e=>setUserPhoto(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(30, 44, 133)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="country">
                                <LocationCityIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(000, 000, 000)',
                                        borderRadius: '9px 0 0 9px',
                                        width: '40px',
                                        height: '30px'}}/>
                                </label>
                                <select name="country" id="country" className='myInputRegister' onChange={e=>setCountry(e.target.value)} required>
                                    {countries.map( everyCountry =>
                                    <option key={everyCountry} value={everyCountry}>{everyCountry}</option>)}
                                </select>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(30, 44, 133)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="email">
                                    <MailIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(000, 000, 000)',
                                        borderRadius: '9px 0 0 9px',
                                        width: '40px',
                                        height: '30px'}}/>
                                </label>
                                <input type='email' name='email' id='email' placeholder='mail' className='myInputRegister' value={mail} onChange={e=>setMail(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(30, 44, 133)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="password">
                                    <KeyIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(000, 000, 000)',
                                        borderRadius: '9px 0 0 9px',
                                        width: '40px',
                                        height: '30px'}}/>
                                </label>
                                <input type='password' name='password' id='password' placeholder='password' className='myInputRegister' value={pass} onChange={e=>setPass(e.target.value)} required/>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                height: '40px',
                                width: '40%',
                                minWidth: '280px',
                                marginTop: '10px'}}>
                                {/* <GoogleSignIn /> */}
                                <button type="submit" className='myButton'>sign up!</button>
                                <LinkRouter to={'/login'} className='anchor festiveFont violetShadows'>Log in!</LinkRouter>
                                {/* <FacebookSignIn /> */}
                            </Box>
                        </form>
                    </>
                </Box>
            </Box>
        </Box>
  )
}