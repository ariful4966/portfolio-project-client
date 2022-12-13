import React from "react";
import { Button, Col, Row } from "react-bootstrap";
// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Paragraph from "../Paragraph";
import SubTitle from "../SubTitle";
import Title from "../Title";
import "./Slider.css";
import { sliderData } from "./sliderData";


// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Slider = () => {
  const handleMoreBtn = () => {};

  

  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 120,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {sliderData.map((slider, idx) => (
          <SwiperSlide key={idx}>
            <Row className="sliderItem align-items-center">
              <Col md={6} sm={12}>
                <div className="sliderContent">
                  <Title h2 heading shadow="#fff">
                    {slider.title}
                  </Title>
                  <SubTitle h4>{slider.subTitle}</SubTitle>

                  <Paragraph>{slider.body}</Paragraph>
                  <Button
                    style={{ background: "#0e3453" }}
                    onClick={() => handleMoreBtn("web")}
                  >
                    More Project
                  </Button>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="sliderPic">
                  <img
                    src={slider.thumbnail}
                    alt="Web Development"
                  />
                </div>
              </Col>
            </Row>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
