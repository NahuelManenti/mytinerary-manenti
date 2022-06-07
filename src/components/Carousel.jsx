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
    <div className="fondo-carousel">
    <Container >
      <div className="Popular-Mytineraries">
        <h2> Popular MYTINERARIES!</h2>
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
        {props.countries.map((country,index)=>
        <SwiperSlide key={index} className="SwiperSlide-row">
          <div className="color-marco-img">{country.ciudad}</div>
          <img className="fotos-carousel" src={country.foto}  alt="Fotos" /> 
          <div className="color-marco-img">{country.pais}</div>
        </SwiperSlide>
        
        )}
      </Swiper>
      </Container>
    </div>
  );
}