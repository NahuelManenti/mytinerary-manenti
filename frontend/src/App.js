import React from 'react';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import './style/App.css';
import { Route, Routes } from 'react-router-dom';
import PageCities from './pages/PageCities';
import PageHome from './pages/PageHome';
import PageError404 from './pages/PageError404';
import PageCitiesDetails from './pages/PageCitiesDetails';
import ScrollToTop from 'react-scroll-to-top';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useDispatch } from 'react-redux';
import {useEffect} from "react"
import cityActions from './redux/actions/cityActions';
import PageLogin from './pages/PageLogin';
import PageSignUp from './pages/PageSignUp';
import SnackBar from './components/SnackBar';
import userActions from './redux/actions/userActions';
import { useSelector } from 'react-redux';


function App() {

  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cityActions.getCities())
            if(localStorage.getItem('token')!==null){
            const token = localStorage.getItem('token')
            dispatch(userActions.verifyToken(token))
          }// eslint-disable-next-line
      },[])

 


  const UserRegister = useSelector(store => store.userReducer.user)
 




  return (
    <div className="App">
     {/* <Navbar/>  */}
          <Routes>
            <Route path='/*' element={<PageError404 />} />
            <Route path='/' element={<PageHome />} />
            <Route path='/cities' element={<PageCities />}  />
            <Route path='/index' element={<PageHome />}  />
            <Route path='/cities/:idCardsCountris' element={<PageCitiesDetails />}  />
            {/* <Route path='/login' element={<PageLogin />} /> */}
            {/* <Route path='/signup' element={<PageSignUp />}  /> */}
            {UserRegister ? <Route path='/login' element={<PageCities />} /> : <Route path='/login' element={<PageLogin />} />}
            {UserRegister ? <Route path='/signup' element={<PageCities />} /> : <Route path='/signup' element={<PageSignUp />} />}
          </Routes>
          <SnackBar/>
          <ScrollToTop style={{backgroundColor:"transparent", borderRadius:"50%", boxShadow:"none"}} smooth component={<FileUploadIcon sx={{color:"#21539e", backgroundColor:"#000000", borderRadius:"50%", fontSize:"7vh"}}/>}/>

      {/* <Footer/> */}
    </div>
  );
}



export default App;


