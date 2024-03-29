import React from 'react';

const PageTitle = (props) => {
    return (
        <div className="page_title">
            <h2>{props.children}</h2>
        </div>
    );
};

export default PageTitle;