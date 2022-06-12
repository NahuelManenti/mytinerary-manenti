import React from 'react'
import Data from "../components/json/Data"; //informacion de paises
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import CardAndFilter from '../components/CardAndFilter';

export default function PageCities() {
  return (
    <>
        <Navbar/>
        {/* <CardAndFilter/> */}
        <Search />
        <Footer/>
  
    </>
  )
}

