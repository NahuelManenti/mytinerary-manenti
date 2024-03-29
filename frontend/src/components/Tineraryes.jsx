import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions'
import {Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import {useState, useEffect} from "react"
import IconButton from '@mui/material/IconButton'
import {styled} from '@mui/material/styles'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Badge from '@mui/material/Badge';
import '../style/Tineraryes.css'
import Activities from './Activities';
import ActivitiesNotFound from './ActivitiesNotFound'
import { useDispatch } from 'react-redux'
import tineraryActions from '../redux/actions/tineraryActions'
import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite'
import Comments from './Comments';


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

  

export default function Tineraryes(props) {

  //console.log(props)
  
  const [likes, setLikes] = useState(props.likes)
  const [reload, setReload] = useState(false)
  const UserRegister = useSelector(store => store.userReducer.user)
  const tinerarySearch = useSelector(store => store.tineraryReducer.filterTin)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tineraryActions.oneTinerary(props.idTineraryes))
    .then(response => setLikes(response.likes))
    // eslint-disable-next-line
  },[reload,tinerarySearch])
  
 
  const toLike =  async (event) => {
    event.preventDefault();
    await dispatch(tineraryActions.likeDislike(props.idTineraryes))
    setReload(!reload)
    }

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
 



  return (
    <Card className='tineraryesBg'
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
            width: '70%'}}
            >

    <Box className='tineraryesName' sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
            height: '100%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#5B7FD4',
            padding: '10px',
            margin: '10px',
            width: '40%',
          }} >{props.itinerary}
      </Box>
            <Stack direction="row" spacing={2}> 
              <Avatar className='tineraryManagerPhoto'
                 alt="Remy Sharp"
                 src={`${props.managerPhoto}`}                                    
                 sx={{ width: 200, height: 200 }}
                 />
            </Stack>
            <Typography variant="h5" >{props.managerName}</Typography>
            <Box >
            <Typography variant="subtitle1" > {props.tags}</Typography>

      {UserRegister?
              <IconButton aria-label="cart" onClick={toLike} >
            {likes.includes(UserRegister.id) ?
                 <FavoriteIcon  color="secondary"/>:
                  <FavoriteBorderIcon/>}
                  <Typography className=''> {likes.length} </Typography>
                </IconButton> :
                <IconButton aria-label="cart" >
                  <FavoriteBorderIcon/>
                  <Typography className=''> {likes.length} </Typography>
                </IconButton>
            }

              <Typography variant="subtitle2" >price: {props.price} - Duration: {props.time}hs⌚  </Typography>  
            </Box>
            
            <CardActions disableSpacing>
                <Box tinDat="asd" />
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon sx={{bgcolor: 'rgb(196, 165, 126)', '&:hover': {bgcolor: 'rgba(196, 165, 126, 0.7)'}, padding: '5px', marginTop: '5px', marginBottom: '5px', color: 'white', width: '30px', height: '30px', borderRadius: '15px'}}/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{width: '100%'}} > 
            {props.itineraryId?.length  > 0 ? <Activities allActivities = {props.itineraryId}></Activities> : <ActivitiesNotFound/> }
                <Typography variant="h5" className='registeredTrademark' sx={{margin: '15px', padding: '2px', textAlign: 'center', color: 'black' }}>Comments!</Typography>
                <Comments allProps = {props}  ></Comments> 
            </Collapse>
        </Card> 
  )
}


// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: '0 4px',
//   },
// }));




