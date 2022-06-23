import React from 'react'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import "../style/CardAndFilter.css";
import { Link as LinkRouter } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, CardActionArea} from '@mui/material';
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
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TinerariesNotSearch from '../components/TinerariesNotSearch'

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
    useEffect( () => {
      dispatch(cityActions.oneCity(idCardsCountris))
      dispatch(tineraryActions.findFromCity(idCardsCountris))
      // eslint-disable-next-line
    },[])
    const CitySearch = useSelector(store => store.cityReducer.oneCity)
    const tinerarySearch = useSelector(store => store.tineraryReducer.filterTin)

    const {idCardsCountris} = useParams()
    // let CitySeharc = allcities.find(info => {
    //    return info._id === idCardsCountris
    // })
    const toTopSmooth = ()=>{
        window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0
        
      })}
      const [expanded, setExpanded] = useState(false);
      const handleExpandClick = () => {
          setExpanded(!expanded);
      }
// console.log(tinerarySearch)
// console.log(CitySearch)
  return (
 <>
    <Navbar></Navbar>
    <div className="containerPageCitiesDetails" >
    <Card sx={{ 
      maxWidth:1920,
      height: '100%',
      width: '100%'
     }}  className="centerCardAndFilter1">
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

    {tinerarySearch.length > 0 ? (
    tinerarySearch?.map((tinerary, index)=>
     <Card key={index}
            sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
            height: '100%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(237, 238, 228)',
            padding: '10px',
            margin: '25px',
            width: '80%'}}>
            <Typography variant="h3" >{tinerary.itinerary}</Typography>
            <Stack direction="row" spacing={2}> 
              <Avatar
                 alt="Remy Sharp"
                 src={`${tinerary.managerPhoto}`}
                 sx={{ width: 96, height: 96 }}
                 />
            </Stack>
            <Typography variant="h5" >{tinerary.managerName}</Typography>
            <Typography variant="subtitle1" > {tinerary.tags}</Typography>
            <Typography variant="subtitle2" >price: {tinerary.price} - Duration: {tinerary.time}hs  <FavoriteBorderIcon></FavoriteBorderIcon>   </Typography>
            <CardActions disableSpacing>
                <Box tinDat="asd" />
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', marginTop: '5px', marginBottom: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{width: '80%'}} className='width60'> 
  <CardExpand ></CardExpand> {/*//CardExpand = {tinerarySearch}  */}
                <Typography variant="h5" className='fredokaFont' sx={{margin: '16px', padding: '8px', textAlign: 'center', color: 'white', backgroundColor: 'rgb(120, 73, 48)'}}>See more</Typography>
                
            </Collapse>
        </Card> 
        )) : (<TinerariesNotSearch/>)}




        <LinkRouter to = {`/cities`} onClick={toTopSmooth} key={CitySearch?._id} >
    <AwesomeButton  className="buttomBackCities" size="large" type="primary">Back to Cities</AwesomeButton>
    </LinkRouter>
        </div>

    <Footer></Footer>
</>
 )
}



export default PageCitiesDetails

