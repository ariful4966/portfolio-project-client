import React from 'react';

const SubTitle = ({children, h4, h5}) => {
    return (
        <>
          {
              h4 && <h4>{children}</h4>
          }
          {
              h5 && <h5>{children}</h5>
          }  
        </>
    );
};

export default SubTitle;