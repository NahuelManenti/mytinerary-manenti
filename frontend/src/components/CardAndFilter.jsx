import { Box} from '@mui/system'
import React from 'react'
import { useEffect, useState } from 'react';
// import Data from './json/Data'
import { useDispatch, useSelector } from 'react-redux';
import cityActions from '../redux/actions/cityActions';
import "../style/CardAndFilter.css";
// import Typography from '@mui/material/Typography';
import NotFound from './NotFound';
import { Link as LinkRouter } from 'react-router-dom';




 function CardAndFilter() {


  const toTopSmooth = ()=>{
    window.scroll({
    behavior: 'smooth',
    left: 0,
    top: 0
    
  })}
  const[search, setSearch] =useState('')
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(cityActions.filterCities(search))
    // eslint-disable-next-line
  },[search])

  const city = useSelector(store => store.cityReducer.filterCity)
  

  // useEffect( () => {
  //   props.getCities()
  // },[])



  // let city= cityRedux.filter(city => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))

  

  return (
<div className='imgBackgroundCard'>
  <Box className='centerBackgroundCardandFilter'>
    <Box className="filterCardAndFilter">
      <input className='searchCitys'
      type='text'
      placeholder='Filter by City '
      onKeyUp={(e)=>{
        setSearch(e.target.value)
      }}
      />
    </Box>
    <ul className="cards">
      {city.length > 0 ? (
    city.map(item=>
      
    <li className="cards__item" key={item._id}>
    <div className="card">
      <div className="card__image card__image--river" style={{backgroundImage: `url(${item.image})` }}></div>
      <div className="card__content">
        <div className="card__title">{item.name}</div>
        <div className="card__text">{item.country} </div>
        <LinkRouter to = {`/cities/${item._id}`} onClick={toTopSmooth} className="btn btn--block card__btn"> See more </LinkRouter>
      </div>
    </div>
  </li>
  
    )) : (<NotFound/>)}
    </ul>
</Box>
</div>
  )
}

export default CardAndFilter


