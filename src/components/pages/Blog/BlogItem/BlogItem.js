import React from "react";
import { Col, Row } from "react-bootstrap";
import './BlogItem.css';

const BlogItem = (props) => {
  const { name, about, img , url} = props.blog;
  return (
    <Col md={12} lg={6} ms={12} xl={6} className="mb-4" >
      <div className="singleItem">
        <Row className="align-items-center" >
          <Col md={6}>
            <div className="singleDetail">
              <h4 className="itemHeading">{name}</h4>
              <p>{about}</p>
              <a className="link" target="_blank" src={url}>See More...</a>
            </div>
          </Col>
          <Col md={6}>
            <div className="singlePic">
              <img src={img} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};


export default BlogItem;
