import React, {useState} from 'react'
import Box from '@mui/material/Box'
import MailIcon from '@mui/icons-material/Mail'
import KeyIcon from '@mui/icons-material/Key'
import PersonIcon from '@mui/icons-material/Person'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import Typography from '@mui/material/Typography'
import {Link as LinkRouter} from "react-router-dom"

import "../style/SignUp.css";
export default function SignUp(props) {


    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [userPhoto,setUserPhoto] = useState("")
    const [country,setCountry] = useState("")
    const [mail,setMail] = useState("")
    const [pass,setPass] = useState("")

    var countries = ["","Mexico","England","United States","South Asia","Spain","Argentina","Japan","Russia","Brazil","France","Other Country"]

    const handleSubmit = (event) => {
        event.preventDefault() //prevenimos la accion del submit(que no recargue la pagina)
        const userData = {
			name: name,
            lastName: lastName,
            userPhoto: userPhoto,
            country: country,
            email: mail,
			password: pass,
			from: "SignUpForm"
		}
        props.signUpUser(userData)
    }



  return (
    
        <Box className='main main-back-sign'>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: '1',
                textAlign: 'center',
                alignItems: 'center',
                width: '100%',
                minHeight: '57.5vh',
                backgroundColor: 'rgb(21, 23, 166, 0.3)'}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: '1',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '10px',
                    marginBottom: '10px'}}>
                    <>
                        <Typography variant="h2" className='festiveFont violetShadows' sx={{padding: '10px'}}>Register Form</Typography>
                        <form onSubmit={handleSubmit} className='w100'>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(16, 165, 126)',
                                borderRadius: '50px'}}>
                                <label htmlFor="name">
                                <PersonIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <input type='text' name='name' id='name' placeholder='first name' className='myInput' value={name} onChange={e=>setName(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="lastName">
                                <PersonIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <input type='text' name='lastName' id='lastName' placeholder='last name' className='myInput' value={lastName} onChange={e=>setLastName(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="userPhoto">
                                <PhotoCameraIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <input type='text' name='userPhoto' id='userPhoto' placeholder="photo's URL" className='myInput' value={userPhoto} onChange={e=>setUserPhoto(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="country">
                                <LocationCityIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <select name="country" id="country" className='myInput' onChange={e=>setCountry(e.target.value)} required>
                                    {countries.map( everyCountry =>
                                    <option key={everyCountry} value={everyCountry}>{everyCountry}</option>)}
                                </select>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="email">
                                    <MailIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <input type='email' name='email' id='email' placeholder='mail' className='myInput' value={mail} onChange={e=>setMail(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px',
                                marginTop: '10px'}}>
                                <label htmlFor="password">
                                    <KeyIcon sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        backgroundColor: 'rgb(196, 165, 126)',
                                        borderRadius: '50px 0 0 50px',
                                        width: '30px',
                                        height: '30px'}}/>
                                </label>
                                <input type='password' name='password' id='password' placeholder='password' className='myInput' value={pass} onChange={e=>setPass(e.target.value)} required/>
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
