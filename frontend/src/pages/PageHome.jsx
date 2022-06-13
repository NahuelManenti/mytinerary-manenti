import React from 'react'
// import Data from "../components/json/Data"; //informacion de paises
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function PageHome() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Main/>
        <Carousel /> {/* //countries= {Data} */}
        <Footer/>
    </div>
  )
}