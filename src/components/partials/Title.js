import React from "react";


const Title = ({ children, h1, h2, h3, h4, h5, heading, footer , shadow='#000' }) => {

  return (
    <>
     
          {h1 && <h1 style={heading && { textShadow: `2px 1px ${shadow}` }}>{children}</h1>}
          {h2 && <h2 style={heading && { textShadow: `2px 1px ${shadow}` }}>{children}</h2>}
          {h3 && <h3 style={heading && { textShadow: `2px 1px ${shadow}` }}>{children}</h3>}
          {h4 && <h4 className={footer} style={heading && { textShadow: `2px 1px ${shadow}` }}>{children}</h4>}
          {h5 && <h5 style={heading && { textShadow: `2px 1px ${shadow}` }}>{children}</h5>}
        </>
        );
};

       

        export default Title;
