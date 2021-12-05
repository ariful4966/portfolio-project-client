import React from "react";
import headerBg from "../../images/background-header.jpeg";
import Navigation from "../Navigation/Navigation";
import ControlledCarousel from "../Slider/Slider";
import "./Header.css";

const Header = ({ home }) => {
  const styles = {
    background: `url(${headerBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  return (
    <div
      className={`header_area ${home ? "headerOverlay" : "section_bg"}`}
      style={home && styles}
    >
      <Navigation />
      {home && (
        <div className="page_padding">
          <ControlledCarousel />
        </div>
      )}
    </div>
  );
};

export default Header;
