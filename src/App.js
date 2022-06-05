import React from 'react';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Data from "./components/json/Data"; //informacion de paises
import './style/App.css';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Header/>
      <Carousel countries= {Data}/>
      <Footer/>
    </div>
  );
}

export default App;
