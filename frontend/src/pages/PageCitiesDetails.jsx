import React from 'react'
import {useEffect} from "react"
import {useParams} from 'react-router-dom'
import "../style/CardAndFilter.css";
import { Link as LinkRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import { useDispatch, useSelector } from 'react-redux';
import cityActions from '../redux/actions/cityActions';
import tineraryActions from '../redux/actions/tineraryActions';
import TinerariesNotSearch from '../components/TinerariesNotSearch'
import Tineraryes from '../components/Tineraryes';
import CardDetails from '../components/CardDetails';


export default function PageCitiesDetails() {

  const dispatch = useDispatch();
    useEffect( () => {
      dispatch(cityActions.oneCity(idCardsCountris))
      dispatch(tineraryActions.findFromCity(idCardsCountris))
      // eslint-disable-next-line
    },[])
    const CitySearch = useSelector(store => store.cityReducer.oneCity)
    const tinerarySearch = useSelector(store => store.tineraryReducer.filterTin)

    const {idCardsCountris} = useParams()
    const toTopSmooth = ()=>{
        window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0
        
      })}
      

  return (
 <>
    <Navbar></Navbar>
    <div className="containerPageCitiesDetails" >
      <CardDetails 
        citySearch={CitySearch}>
      </CardDetails>
          {tinerarySearch.length > 0 ? (
          tinerarySearch?.map((tinerary, index)=>
      <Tineraryes key={index}
        itinerary={tinerary.itinerary}
        managerPhoto={tinerary.managerPhoto} 
        managerName={tinerary.managerName} 
        price={tinerary.price} 
        time={tinerary.time} 
        likes={tinerary.likes}
        tags={tinerary.tags}
      ></Tineraryes>
      )) : (<TinerariesNotSearch/>)}
      <LinkRouter to = {`/cities`} onClick={toTopSmooth} key={CitySearch?._id} >
          <AwesomeButton  className="buttomBackCities" size="large" type="primary">Back to Cities</AwesomeButton>
      </LinkRouter>
    </div>
    <Footer></Footer>
</>
 )
}



