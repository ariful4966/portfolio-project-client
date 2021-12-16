import React from "react";
import { Button, Col, Row } from "react-bootstrap";
// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import fullStack from "../../../assets/images/slider/fullStack.png";
import mobile from "../../../assets/images/slider/mobile .png";
import server from "../../../assets/images/slider/server.png";
import website from "../../../assets/images/slider/webApp.png";
import Paragraph from "../Paragraph";
import SubTitle from "../SubTitle";
import Title from "../Title";
import "./Slider.css";

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
        <SwiperSlide>
          <Row className="sliderItem align-items-center">
            <Col md={6}>
              <div className="sliderContent">
                <Title h2 heading shadow="#fff">
                  Web Application Development
                </Title>
                <SubTitle h4>Frontend Development Using React JS</SubTitle>

                <Paragraph>
                  Hi! React is awesome javascript library. React can react a web
                  application using multiple small components. For that website
                  will be supper fast. There are many diffrent type of hooks
                  like useState, useEffect, useParam etc. every hook can
                  complete her own task. like state handling, data fatching etc.
                  React can include multiple node packages. Differnce type of
                  package handle diffrence task. For this reason the developed
                  react website is faster.
                </Paragraph>
                <Button
                  style={{ background: "#0e3453" }}
                  onClick={() => handleMoreBtn("web")}
                >
                  More Project
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="sliderPic">
                <img src={website} alt="Web Development" />
              </div>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row className="sliderItem align-items-center">
            <Col md={6}>
              <div className="sliderContent">
                <Title h2 heading shadow="#fff">
                  Mobile Application Development
                </Title>
                <SubTitle h4>UI Design using React Native</SubTitle>
                <Paragraph>
                  React-Native is an awesome creation of the React team of
                  developers. If you can create mobile applications, the
                  applications will run on both the ISO and Android platforms.
                  It can create any type of mobile application. React and
                  react-native are combined in every app. Like handling the
                  state using the useState hook or get data faching use
                  useEffect hook
                </Paragraph>
                <Button
                  style={{ background: "#0e3453" }}
                  onClick={() => handleMoreBtn("mobile")}
                >
                  See More..
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="sliderPic">
                <img src={mobile} alt="Mobile App Development" />
              </div>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row className="sliderItem align-items-center">
            <Col md={6}>
              <div className="sliderContent">
                <Title h2 heading shadow="#fff">
                  Backend Server Development
                </Title>
                <SubTitle h4> Using Node JS and Express JS </SubTitle>
                <Paragraph>
                  NodeJS is the most powerful platform in the web world. The
                  backend server of nodeJS is awesome. It can be a very fast
                  service of data using only Javascript. They can be added to
                  many packages of NPM, like mongoose, express, etc. The MongoDB
                  database can be very useful with this platform. It's a better
                  experience. Other databases can also be used with this runtime
                  platform.
                </Paragraph>
              </div>
            </Col>
            <Col md={6}>
              <div className="sliderPic">
                <img src={server} alt="Node Server Development" />
              </div>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row className="sliderItem align-items-center">
            <Col md={6}>
              <div className="sliderContent">
                <Title h2 heading shadow="#fff">
                  FullStack Website Development
                </Title>
                <SubTitle h4> Frontend+Backend Using React+Node </SubTitle>
                <Paragraph>
                UI Design in ReactJS. React is a library. Using this, I can create a single-page web application using the backend API. The Node server generates all control and validation checks based on the user role.I can include the MongoDB database with this. MongoDB is a non-relational database, but for practical purposes, I establish a relationship with another collection.
                </Paragraph>
              </div>
            </Col>
            <Col md={6}>
              <div className="sliderPic">
                <img src={fullStack} alt="Node Server Development" />
              </div>
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
