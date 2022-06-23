import React from 'react'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import "../style/CardAndFilter.css";
import { Link as LinkRouter } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, CardActionArea, useControlled} from '@mui/material';
// import Data from '../components/json/Data';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {styled} from '@mui/material/styles'
import CardExpand from '../components/CardExpand';
import { useDispatch, useSelector } from 'react-redux';
import cityActions from '../redux/actions/cityActions';
import tineraryActions from '../redux/actions/tineraryActions';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
}),
}));



 function PageCitiesDetails() {

  const dispatch = useDispatch();
  


    // const dispatch = useDispatch();
    useEffect( () => {
      dispatch(cityActions.oneCity(idCardsCountris))
      dispatch(tineraryActions.findFromCity(idCardsCountris))
    },[])
    const CitySearch = useSelector(store => store.cityReducer.oneCity)
    const tinerarySearch = useSelector(store => store.tineraryReducer.filterTin)

    const {idCardsCountris} = useParams()
    // let CitySeharc = allcities.find(info => {
    //    return info._id === idCardsCountris
    // })
    console.log(tinerarySearch)
    const toTopSmooth = ()=>{
        window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0
        
      })}
      // const [activity,setActivity] = useState([])
      const [expanded, setExpanded] = useState(false);
      const handleExpandClick = () => {
          setExpanded(!expanded);
      }

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
     <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
            height: '100%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(237, 238, 228)',
            padding: '10px',
            width: '100%'}}>
            <Typography variant="h2" className='festiveFont'>{tinerarySearch?.itinerary}</Typography>
            <Typography variant="subtitle1" className='fredokaFont'>{tinerarySearch?.description}</Typography>
            <Typography variant="subtitle2" className='fredokaFont'>price: {tinerarySearch?.price} - {tinerarySearch?.time}hs</Typography>
            <CardActions disableSpacing>
                <Box tinDat="asd" />
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', marginTop: '5px', marginBottom: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{width: '80%'}} className='width60'> 
                 {/* <Activities activities={activity} />  */}
  <CardExpand ></CardExpand> {/*//CardExpand = {tinerarySearch}  */}
                <Typography variant="h5" className='fredokaFont' sx={{margin: '16px', padding: '8px', textAlign: 'center', color: 'white', backgroundColor: 'rgb(120, 73, 48)'}}>See more</Typography>
                
            </Collapse>
        </Card> 


    <Footer></Footer>
</>
 )
}



export default PageCitiesDetails

