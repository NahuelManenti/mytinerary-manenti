import React from "react";//, { useRef, useState }
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/Carousel.css";

// import required modules
import { Grid, Pagination, Navigation, Autoplay } from "swiper";
import Container from '@mui/material/Container';


export default function Carousel(props) {
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
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          
        }}
        modules={[Grid, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {props.countries.map((country,index)=>
        <SwiperSlide key={index} className="swiperSlideRow">
          <div className="colorFramework">{country.City}</div>
          <img className="photosCarousel" src={country.Photo}  alt="Scenery" /> 
          <div className="colorFramework">{country.country}</div>
        </SwiperSlide>
        
        )}
      </Swiper>
      </Container>
    </div>
  );
}