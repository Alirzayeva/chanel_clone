import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
//images
import hauteCouture1 from "../assets/images/clothes/chanel_1.jpg";
import hauteCouture2 from "../assets/images/clothes/chanel_2.jpg";
import hauteCouture3 from "../assets/images/clothes/chanel_3.webp";
import hauteCouture4 from "../assets/images/clothes/chanel_5.webp";
import hauteCouture5 from "../assets/images/clothes/chanel_6.jpg";
import hauteCouture6 from "../assets/images/clothes/chanel_7.webp";
import hauteCouture7 from "../assets/images/clothes/chanel_8.webp";
import hauteCouture8 from "../assets/images/clothes/chanel_9.webp";
import hauteCouture10 from "../assets/images/clothes/chanel_10.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const HauteCouture = () => {
  return (
    <main>
      <section className="hauteCoutureSection">
        <div className="hauteCoutureSectionText">
          <p>Haute Couture</p>
          <span> Spring-Summer 2023 show</span>
          <button>See More</button>
        </div>
      </section>

      <section className="hauteCoutureSlideSection">
        <div className="slide">
          <Swiper
            slidesPerView={3}
            spaceBetween={25}
            freeMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={hauteCouture1} alt="hauteCouture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hauteCouture10} alt="hauteCouture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hauteCouture2} alt="hauteCouture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hauteCouture3} alt="hauteCouture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hauteCouture4} alt="hauteCouture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hauteCouture5} alt="hauteCouture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hauteCouture6} alt="hauteCouture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hauteCouture7} alt="hauteCouture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hauteCouture8} alt="hauteCouture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hauteCouture10} alt="hauteCouture" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default HauteCouture;
