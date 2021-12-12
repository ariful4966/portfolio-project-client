import React from "react";
import headerBg from "../../../assets/images/background-header.jpeg";
import Navigation from "../Navigation/Navigation";
import ControlledCarousel from "../Slider/Slider";
import "./Header.css";
import HeaderSvg from "./HeaderSvg";

const Header = ({ home }) => {
  const styles = {
    background: `#5f4def`,
    
  };
  return (
    <>
      <div
        className={`header_area section_bg`}
        style={styles}
      >
        <Navigation />

        {home && (
          <div className="page_padding">
            <ControlledCarousel />
          </div>
        )}
      </div>
      <HeaderSvg />
    </>
  );
};

export default Header;
