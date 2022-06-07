import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './style/App.css';
import { Route, Routes } from 'react-router-dom';
import PaginaCities from './pages/PaginaCities';
import PaginaHome from './pages/PaginaHome';




function App() {
  return (
    <div className="App">
     <Navbar/> 
          <Routes>
            <Route path='/' element={<PaginaHome />} />
            <Route path='/cities' element={<PaginaCities />}  />
            <Route path='/index' element={<PaginaHome />}  />
          </Routes>
      <Footer/>
    </div>
  );
}

export default App;
