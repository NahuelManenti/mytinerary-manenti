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
import { connect } from 'react-redux';
import cityActions from '../redux/actions/cityActions';





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



 function PageCitiesDetails(props) {

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

    //   useEffect(() => {
    //     props.getCities(props._id).then(res => {
    //         setActivity(res.response)
    // })},[])
useEffect( () => {
  props.getCities()
},[])


    const {idCardsCountris} = useParams()

    let CitySearch = props.cities.find(info => {
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
     <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
            height: '100%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(207, 238, 228)',
            padding: '10px',
            width: '100%'}}>
            <Typography variant="h2" className='festiveFont'>asd</Typography>
            <Typography variant="subtitle1" className='fredokaFont'>asd</Typography>
            <Typography variant="subtitle2" className='fredokaFont'>price: asd - time: asd</Typography>
            <CardActions disableSpacing>
                <Box tinDat="asd" />
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', marginTop: '5px', marginBottom: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{width: '80%'}} className='width60'> 
                 {/* <Activities activities={activity} />  */}
                 <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-between'}}>
            {props.cities?.map( everyAct =>
                <div key={everyAct._id}>
                    <Box className='absolute activities' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(126, 196, 165, 0.4)',
                        marginLeft: '16px',
                        marginRight: '16px'}}>
                        <Typography variant="h4" className='fredokaFont shadows' sx={{color: 'black'}}>{everyAct.name}</Typography>
                    </Box>
                    <Box className='relative activities' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '16px',
                        marginRight: '16px'}}>
                        <img src={process.env.PUBLIC_URL+`${everyAct.img}`} alt={everyAct.name} className='fitImg' />
                    </Box>
                </div>
            )}
        </Box>
                <Typography variant="h5" className='fredokaFont' sx={{margin: '16px', padding: '8px', textAlign: 'center', color: 'white', backgroundColor: 'rgb(0, 73, 48)'}}>comments</Typography>
                
            </Collapse>
        </Card> 


    <Footer></Footer>
</>
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


export default connect(mapStateToProps, MapDispatchToProps) (PageCitiesDetails)

