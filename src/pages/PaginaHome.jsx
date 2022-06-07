import React from 'react'
import Data from "../components/json/Data"; //informacion de paises
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Main from '../components/Main';
import { Link as LinkRouter } from 'react-router-dom'

export default function paginaHome() {
  return (
    <div>
        <Main/>
        <Header/>
        <Carousel countries= {Data}/>
    </div>
  )
}