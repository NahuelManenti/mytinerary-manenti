import { Box} from '@mui/system'
import React from 'react'
import { useEffect, useState } from 'react';
// import Data from './json/Data'
import { connect } from 'react-redux';
import cityActions from '../redux/actions/cityActions';
import "../style/CardAndFilter.css";

// import Typography from '@mui/material/Typography';

import NotFound from './NotFound';
import { Link as LinkRouter } from 'react-router-dom';




 function CardAndFilter(props) {
  const toTopSmooth = ()=>{
    window.scroll({
    behavior: 'smooth',
    left: 0,
    top: 0
    
  })}



  const[search, setSearch] =useState('')

  useEffect( () => {
    props.getCities()
  },[])
  let city= props.cities.filter(city => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))

  // const[Cities, setCities] = React.useState([])
  

    


  return (
<div className='imgBackgroundCard'>
  <Box className='centerBackgroundCardandFilter'>
    {/* <Container maxWidth="xl"> */}
    <Box className="filterCardAndFilter">
    {/* <Typography gutterBottom variant="h5" component="div" className='upSearchCitys'>
      Search City
    </Typography> */}
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
    {/* </Container> */}
</Box>
</div>
  )
}
const MapDispatchToProps={
  getCities:cityActions.getCities,
}

const mapStateToProps= (state)=> {
  return{
    cities: state.cityReducer.cities,
    auxiliar: state.cityReducer.auxiliar
  }

}
export default connect(mapStateToProps, MapDispatchToProps) (CardAndFilter)




  // <Card sx={{ maxWidth: 1200 }} className="centerCardAndFilter1">
  //     <CardActionArea className="centerCardAndFilter" >
  //     <CardContent className='colorBlackCardAndFilter'></CardContent>
  //       <CardMedia
  //         component="img"
  //         height="450"
  //         image={item.image}
  //         alt={itemname}
  //       />
  //       <CardContent className='colorBlackCardAndFilter'>
  //         <Typography gutterBottom variant="h5" component="div">
  //           {itemname}
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //   </Card>