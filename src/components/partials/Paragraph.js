import React from "react";

const Paragraph = ({ children, size = 14 }) => {
  return <p style={{ fontSize: size }}>{children}</p>;
};

export default Paragraph;
