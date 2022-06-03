import React from 'react';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './style/App.css';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Main/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
