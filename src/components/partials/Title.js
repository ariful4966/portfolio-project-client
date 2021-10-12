import React from "react";

const Title = ({ children, h1, h2, h3, h4, h5 ,slider }) => {
  return (
    <>
      {h1 && <h1 style={slider && {color: '#fff'}}>{children}</h1>}
      {h2 && <h2 style={slider && {color: '#fff'}}>{children}</h2>}
      {h3 && <h3 style={slider && {color: '#fff'}}>{children}</h3>}
      {h4 && <h4 style={slider && {color: '#fff'}}>{children}</h4>}
      {h5 && <h5 style={slider &&{color: '#fff'}}>{children}</h5>}
    </>
  );
};

export default Title;
