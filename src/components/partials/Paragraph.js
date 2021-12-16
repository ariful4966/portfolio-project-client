import React from "react";

const Paragraph = ({ children, size = 14, className='' }) => {
  return <p className={className} style={{ fontSize: size }}>{children}</p>;
};

export default Paragraph;
