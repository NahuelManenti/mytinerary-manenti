import React from "react";//, { useRef, useState }
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "./json/Data"

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/Carousel.css";

// import required modules
import { Grid, Pagination, Navigation, Autoplay } from "swiper";
import Container from '@mui/material/Container';


export default function Carousel() {
  return (
    <div className="bgCarousel">
    <Container >
      <div className="popularMytineraries">
      <h2 className='mytineraryFont'><span className="popularFontColor">Popular </span><span className='myFontColor'>My</span>Tinerary</h2>
      </div>
      <Swiper
        slidesPerView={2}
        slidesPerGroup={2}
        grid={{
          rows: 2
        }}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[Grid, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {Data.map((countrys ,index)=>
        <SwiperSlide key={index} className="swiperSlideRow">
          <div className="colorFramework">{countrys.City}</div>
          <img className="photosCarousel" src={countrys.Photo}  alt="Scenery" /> 
          <div className="colorFramework">{countrys.country}</div>
        </SwiperSlide>
        
        )}
      </Swiper>
      </Container>
    </div>
  );
}