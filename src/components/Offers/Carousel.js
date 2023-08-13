import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/style.css";
import Cards from "./Cards";

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
            title="Pass ‘Trial’ "
            price="$ 0"
            offerOne="Access to the gym from 8:00 to 14:00"
            offerTwo="The trainer on duty will introduce you to the gym"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            title="Pass ‘Free Time’  "
            price="$ 49"
            offerOne="The entrance time to the gym is from 14:00 to 16:00"
            offerTwo="Without suspension of gym membership"
            offerThree="The trainer on duty will introduce you to the gym"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            title="Pass ‘1 Month 24/7’ "
            price="$ 85"
            offerOne="Visit without restrictions 24/7"
            offerTwo="The trainer on duty will introduce you to the gym"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            title="Pass ‘Easy Start’ "
            price="$ 119"
            offerOne="Visit without restrictions 24/7"
            offerTwo="Individual training program"
            offerThree="Access to the VTRAINER application"
            offerFour="Trainer support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            title="Pass ‘In Shape (AM)’ "
            price="$ 165"
            offerOne="Training in mini-groups until 14:00"
            offerTwo="Without suspension of gym membership"
            offerThree="Classes with a trainer in a mini-group 3 times a week"
            offerFour="Trainer support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            title="Pass ‘In Shape (PM)’ "
            price="$ 195 "
            offerOne="Training in mini-groups until 17:00"
            offerTwo="Without suspension of gym membership"
            offerThree="Classes with a trainer in a mini-group 3 times a week"
            offerFour="Trainer support"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
