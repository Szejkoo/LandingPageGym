import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/style.css";
import Cards from "./Cards";
import staff from "../img/staff.png";
import staff2 from "../img/staff2.png";
import staff3 from "../img/staff3.png";
import staff4 from "../img/staff4.png";
import staff5 from "../img/staff5.png";
import staff6 from "../img/staff6.png";
import staff7 from "../img/staff7.png";
import staff8 from "../img/staff8.png";

import {
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Carousel(props) {
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
          <Cards
            name="Victoria Shurpik"
            img={staff}
            icon={faInstagram}
            iconTwo={faXTwitter}
            iconThree={faYoutube}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            name="Elizabeth Lavrinenko"
            img={staff3}
            icon={faInstagram}
            iconTwo={faXTwitter}
            iconThree={faYoutube}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            name="Ivan Gladkikh"
            img={staff4}
            icon={faInstagram}
            iconTwo={faXTwitter}
            iconThree={faYoutube}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            name="Evgeny Gurkov"
            img={staff2}
            icon={faInstagram}
            iconTwo={faXTwitter}
            iconThree={faYoutube}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            name="Lyudmila Sabilo"
            img={staff5}
            icon={faInstagram}
            iconTwo={faXTwitter}
            iconThree={faYoutube}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            name="Anatoly Prytysky"
            img={staff6}
            icon={faInstagram}
            iconTwo={faXTwitter}
            iconThree={faYoutube}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            name="Victor Ludkovich"
            img={staff7}
            icon={faInstagram}
            iconTwo={faXTwitter}
            iconThree={faYoutube}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            name="Maria Masyak"
            img={staff8}
            icon={faInstagram}
            iconTwo={faXTwitter}
            iconThree={faYoutube}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
