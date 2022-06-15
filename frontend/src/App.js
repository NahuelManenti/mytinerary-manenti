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


function App() {
  return (
    <div className="App">
     {/* <Navbar/>  */}
          <Routes>
            <Route path='/*' element={<PageError404 />} />
            <Route path='/' element={<PageHome />} />
            <Route path='/cities' element={<PageCities />}  />
            <Route path='/index' element={<PageHome />}  />
            <Route path='/cities/:idCardsCountris' element={<PageCitiesDetails />}  />
          </Routes>
          <ScrollToTop style={{backgroundColor:"transparent", borderRadius:"50%", boxShadow:"none"}} smooth component={<FileUploadIcon sx={{color:"#21539e", backgroundColor:"#000000", borderRadius:"50%", fontSize:"7vh"}}/>}/>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
