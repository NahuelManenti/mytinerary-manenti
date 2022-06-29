import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';
// import SnackBar from '../components/SnackBar';
// import { useSelector} from 'react-redux'


export default function PageSignUp() {

  // const message = useSelector(store => store.userReducer.snackbar)



  return (
    <>
        <Navbar/>
        <SignUp/>
        <Footer/>
    </>
  )
}
