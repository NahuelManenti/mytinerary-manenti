import { Box} from '@mui/system'
import React from 'react'
import Data from './json/Data'
import "../style/CardAndFilter.css";

import Typography from '@mui/material/Typography';

import NotFound from './NotFound';
import { Link as LinkRouter } from 'react-router-dom';



export default function CardAndFilter() {
  

  const[Cities, setCities] = React.useState([])
  const[search, setSearch] = React.useState('')


  React.useEffect(()=>{
    setCities(Data)

    let city= Data.filter(city => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))
    setCities(city)
    },[search])



  return (
  <div className='imgBackgroundCard'>
    <Box className="filterCardAndFilter">
    <Typography gutterBottom variant="h5" component="div" className='upSearchCitys'>
      Search City
    </Typography>
      <input className='searchCitys'
      type='text'
      placeholder='Search...'
      onKeyUp={(e)=>{
        setSearch(e.target.value)
      }}
      />
    </Box>
    <ul className="cards">
      {Cities.length > 0 ? (
    Cities.map(item=>
      
    <li className="cards__item" key={item._id}>
    <div className="card">
      <div className="card__image card__image--river" style={{backgroundImage: `url(${item.image})` }}></div>
      <div className="card__content">
        <div className="card__title">{item.name}</div>
        <div className="card__text">{item.country} </div>
        <LinkRouter to = {`/cities/${item._id}`} className="btn btn--block card__btn"> See more </LinkRouter>
      </div>
    </div>
  </li>
  
    )) : (<NotFound/>)}
    </ul>
</div> 
  )
}






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