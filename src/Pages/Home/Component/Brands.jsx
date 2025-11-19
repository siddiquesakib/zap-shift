import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import amzon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brands = [
  amzon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
];

const Brands = () => {
  return (
    <Swiper
      className="mt-20"
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 10,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {brands.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;

/** how to autoplay brands 
 * 1. add Swiper in Swiperjs and install
 * 2. copy Swiper js demo anyone
 * 3. then SwiperSlide (you can mape)
 * 4. slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 10,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      add this what you want
      


 * 5. must import import "swiper/css"; this

      
      */
