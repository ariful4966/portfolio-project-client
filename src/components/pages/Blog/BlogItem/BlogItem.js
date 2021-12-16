import { faWeebly } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Paragraph from "../../../partials/Paragraph";
import Title from "../../../partials/Title";
import './BlogItem.css';

const BlogItem = (props) => {
  const { title, body, image , website, _id} = props.blog;
  const history = useHistory();
  return (
    <Col md={4} lg={4} ms={12} xl={4} className="mb-4" >
      <div className="singleBlogItem" >
        <div className="singlePic">
          <img src={image.display_url} alt="" />
        </div>
        <div className="singleDetail">
          <div>
            <Title h4 className="itemHeading">
              {title}
            </Title>
            <Paragraph>{body.slice(0, 120)}...</Paragraph>
            <a href={website} target={"_blank"}>
              {" "}
              <FontAwesomeIcon icon={faWeebly} />
            </a>
            <span onClick={()=>history.push(`${_id}`)}>Read More.</span>
            
          </div>
        </div>
      </div>
    </Col>
  );
};


export default BlogItem;
