import React, { } from "react"; // {useRef, useState} 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import carousel styles
import "../style/Carousel.css";
// import required modules
import { Pagination, Navigation } from "swiper";


export default function Carousel(props) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {props.countries.map((country)=> <SwiperSlide>{country.pais}</SwiperSlide>  )}
        
      </Swiper>
    </>
  );
}
