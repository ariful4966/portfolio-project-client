import { faGithub, faWeebly } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Paragraph from "../../../partials/Paragraph";
import Title from "../../../partials/Title";
import "./ProjectItem.css";

const ProjectItem = (props) => {
  const { title, image, url, body, _id } = props.project;

  const history = useHistory();

  return (
    <Col md={4} lg={4} sm={12} className="mb-4">
      <div className="singleItem" >
        <div className="singlePic">
          <img src={image.display_url} alt="" />
        </div>
        <div className="singleDetail">
          <div>
            <Title h4 className="itemHeading">
              {title}
            </Title>
            <Paragraph>{body.slice(0, 120)}...</Paragraph>
            <a href={url.webUrl} target={"_blank"}>
              {" "}
              <FontAwesomeIcon icon={faWeebly} />
            </a>
            <a href={url.gitUrl} target={"_blank"}>
              {" "}
              <FontAwesomeIcon icon={faGithub} />{" "}
            </a>
            <span onClick={()=>history.push(`${_id}`)}>Read More.</span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectItem;
