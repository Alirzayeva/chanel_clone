import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//video
import jeweleryVideo_2 from "../assets/video/jewelery/jewelerySlide_2.mp4";
import jeweleryVideo_3 from "../assets/video/jewelery/jewelerySlide_3.mp4";
//image
import jeweleryImg from "../assets/images/background/otherBg/jeweleryBg.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
const HighJewelery = () => {
  return (
    <section className="highJewelerySection">
      <div className="row">
        <div className="swippr">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <video
                src={jeweleryVideo_3}
                autoPlay
                muted
                controls={false}
              ></video>
            </SwiperSlide>

            <SwiperSlide>
              <video
                src={jeweleryVideo_2}
                autoPlay
                muted
                controls={false}
              ></video>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div className="jeweleryInfo">
          <h2>1932, CHASING THE DREAM</h2>
          <p>
            90 years after the debut of the first high jewelry collection, the
            CHANEL Fine Jewelry Creation Studio draws inspiration from the
            timeless BIJOUX DE DIAMANTS pieces to tell a new tale. The
            Collection 1932 represents a journey beyond time and space, where
            the movement of the planets and the kinetics of the stars are
            observed. From the original collection, Patrice Leguéreau, Director
            of the CHANEL Fine Jewelry Creation Studio, preserves the celestial
            theme, the purity of the lines and the freedom of the body. The
            perfect roundness of the diamonds gives the symbols a sense of
            eternity, enhanced by rays of light that make them sparkle.
          </p>
          <Link to="/">Discover</Link>
        </div>
      </div>
      <div className="jeweleryImg">
        <img src={jeweleryImg} alt="jeweleryImg" />
      </div>
    </section>
  );
};

export default HighJewelery;
