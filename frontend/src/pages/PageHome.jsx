import React from 'react'
import Data from "../components/json/Data"; //informacion de paises
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Main from '../components/Main';


export default function PageHome() {
  return (
    <div>
        <Main/>
        <Header/>
        <Carousel countries= {Data}/>
    </div>
  )
}