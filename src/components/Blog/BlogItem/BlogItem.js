import React from 'react';
import { Col } from 'react-bootstrap';

const BlogItem = (props) => {
    const { name, about, img, url } = props.blog
    return (
        <Col md={4} className="blogItem">
            <div className="singleItem">
                <div className="singlePic">
                    <img src={img} alt="" />
                </div>
                <div className="singleDetail">
                        <h4 className="itemHeading">
                            {name}
                        </h4>
                        <p>{about}</p>
                    </div>
            </div>
        </Col>
    );
};

export default BlogItem;