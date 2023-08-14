import React from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/style.css";
import photo from "../img/photo.png";
import photo2 from "../img/photo2.png";
import photo3 from "../img/photo3.png";
import photo4 from "../img/photo4.png";

function Carousel() {
  const Img = styled.img`
    width: 360px;
    border-radius: 10px;
    margin-top: 60px;
    background-color: #222222;
  `;
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Img src={photo} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={photo2} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={photo3} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={photo4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
