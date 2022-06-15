import React from 'react'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import "../style/CardAndFilter.css";
import { Link as LinkRouter } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
// import Data from '../components/json/Data';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import axios from "axios";


export default function PageCitiesDetails() {

    const toTopSmooth = ()=>{
        window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0
        
      })}

     
const [Data, setData] = useState([])

useEffect( () => {
  axios?.get(`http://localhost:4000/api/cities`)
  .then(res =>{

    setData(res.data.response.cities)
    
  })
},[])


    const {idCardsCountris} = useParams()

    let CitySearch = Data.find(info => {
       return info._id === idCardsCountris
    })


  return (
 <>
    <Navbar></Navbar>
    <div className="containerPageCitiesDetails" >
    <Card sx={{ maxWidth:1100 }}  className="centerCardAndFilter1">
      <CardActionArea className="centerCardAndFilter" >
      <CardContent className='colorBlackCardAndFilter'></CardContent>
        <CardMedia className='imgPageCitiesDetails'
          component="img"
          // height="263"
          image={CitySearch?.image}
          alt={CitySearch?.name}
        />
        <CardContent className='colorBlackCardAndFilter'>
          <Typography gutterBottom variant="h4" component="div">
            {CitySearch?.name}
          </Typography>
           <Typography gutterBottom variant="h7" component="div">
          {CitySearch?.description}
          </Typography> 
        </CardContent>
      </CardActionArea>
    </Card>
    <LinkRouter to = {`/cities`} onClick={toTopSmooth} key={CitySearch?._id} >
    <AwesomeButton  className="buttomBackCities" size="large" type="primary">Back to Cities</AwesomeButton>
    </LinkRouter>
    </div>
    <Footer></Footer>
</>
 )
}

