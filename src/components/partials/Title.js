import React from "react";

const Title = ({ children, h1, h2, h3, h4, h5,  heading }) => {
 
  return (
    <>
      {h1 && <h1 style={ heading && {textShadow:'2px 1px #000'} }>{children}</h1>}
      {h2 && <h2 style={ heading && {textShadow:'2px 1px #000'} }>{children}</h2>}
      {h3 && <h3 style={ heading && {textShadow:'2px 1px #000'}}>{children}</h3>}
      {h4 && <h4 style={ heading && {textShadow:'2px 1px #000'}}>{children}</h4>}
      {h5 && <h5 style={ heading && {textShadow:'2px 1px #000'}}>{children}</h5>}
    </>
  );
};

export default Title;
