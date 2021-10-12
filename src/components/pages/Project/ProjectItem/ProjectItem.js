import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

const ProjectItem = (props) => {
   const {name, img, url, about} = props.project;
    return (
        <Col md={4} className="singleProject">
            <div className="singleItem">
                <div className="singlePic">
                    <img src={img} alt="" />
                </div>
                <div className="singleDetail">
                        <h4 className="itemHeading">
                            {name}
                        </h4>
                        <p>{about}</p>
                        <a href={url} > View Website</a>
                    </div>
            </div>
        </Col>
    );
};

export default ProjectItem;