import React from "react";//, { useRef, useState }
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "../style/Carousel.css";

// import required modules
import { Grid, Pagination } from "swiper";
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
        grid={{
          rows: 2
        }}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {props.countries.map((country)=>
        <SwiperSlide className="SwiperSlide-row">
          {country.ciudad}
          <img className="fotos-carousel" src={country.foto}  alt="Fotos" /> 
          {country.pais}
        </SwiperSlide>
        
        )}
      </Swiper>
      </Container>
    </div>
  );
}