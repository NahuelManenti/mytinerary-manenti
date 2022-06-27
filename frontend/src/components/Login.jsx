import React, {useState} from 'react'
import Box from '@mui/material/Box'
import MailIcon from '@mui/icons-material/Mail'
import KeyIcon from '@mui/icons-material/Key'
import Typography from '@mui/material/Typography'
import {Link as LinkRouter} from "react-router-dom"
import "../style/Login.css";

export default function Login(props) {
        const [mail,setMail] = useState("")
        const [pass,setPass] = useState("")
    
        const handleSubmit = (event) => {
            event.preventDefault() //prevenimos la accion del submit
            const userLogin = {
                email: mail,
                password: pass,
                from: "LogInForm"
            }
            props.logInUser(userLogin)
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
                        <Typography variant="h2" className='festiveFont violetShadows' sx={{padding: '10px'}}>Welcome!</Typography>
                        <form onSubmit={handleSubmit} className='w100'>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',
                                border: '5px solid rgb(196, 165, 126)',
                                borderRadius: '50px'}}>
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
                                <input type='password' name='password' id='password' placeholder='password' className='myInput' value={pass} onChange={e=>setPass(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                height: '40px',
                                width: '40%',
                                minWidth: '280px',
                                marginTop: '10px'}}>
                                {/* <GoogleSignIn /> */}
                                <input type="submit" value='log in!' className='myButton fredokaFont' required />
                                <LinkRouter to={'/signup'} className='anchor festiveFont violetShadows'>
                                    Sign up!
                                </LinkRouter>
                                {/* <FacebookSignIn /> */}
                            </Box>
                        </form>
                    </>
                </Box>
            </Box>
        </Box>
        
    
  )
}
