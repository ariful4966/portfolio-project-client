import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Slider from "../Slider/Slider";
import "./Header.css";
import HeaderSvg from "./HeaderSvg";

const Header = ({ home }) => {
  const styles = {
    background: `#5f4def`,
  };
  return (
    <>
      <div className={`header_area section_bg`} style={styles}>
        <Navigation />

        {home && (
          <div className="page_padding">
            <Container fluid>
              <Slider />
            </Container>
          </div>
        )}
      </div>
      <HeaderSvg />
    </>
  );
};

export default Header;
