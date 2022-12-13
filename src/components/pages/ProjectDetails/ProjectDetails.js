import { faAngellist, faGithub, faWeebly } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../partials/Footer/Footer";
import Header from "../../partials/Header/Header";
import Paragraph from "../../partials/Paragraph";
import SubTitle from "../../partials/SubTitle";
import Title from "../../partials/Title";
import './ProjectDetails.css';


const ProjectDetails = () => {
  const { projectId } = useParams();
  const [content, setContnet] = useState({});
  const { web, blog, mobile } = useSelector((state) => state);
  const projects = [...web, ...blog, ...mobile];
  useEffect(() => {
    const project = projects.find((pj) => pj._id === projectId);
    setContnet(project);
  }, [projects]);

  const date = new Date(`${content && content.createdAt}`).toDateString();
  console.log(date);
  return (
    <div>
      <Header />
      <Container>
        <div className="pro_details_area">
          {content && content.title && <Title h1>{content.title}</Title>}
          {content && content.createdAt && <Paragraph className="pro_date" size={20}> <span style={{color: 'gray'}}>Create the Post:</span> {new Date(`${content && content.createdAt}`).toDateString()}</Paragraph>}
          <Row>
            <Col md={4}>
              {content && (
                <section className="pro_body">
                  {content.body && <Paragraph size={25}>{content.body}</Paragraph>}
                  {content.language && (
                    <div className="usesLang">
                      <SubTitle h5> Language, Framwork, Database :</SubTitle>
                      <ul>
                        {content.language.map((ln) => (
                          <li><FontAwesomeIcon icon={ faAngellist } /> {ln}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {
                    content.url && <div className="pro_url">
                      <a href={content.url.webUrl} target={"_blank"}>
                       Live Website <FontAwesomeIcon icon={ faWeebly } />
                      </a>
                      <a href={content.url.gitUrl} target={"_blank"}>
                       Code Repository <FontAwesomeIcon icon={ faGithub } />
                      </a>
                    </div>
                  }
                  {
                    content.website && <div className="pro_url">
                      <a href={content.website} target={"_blank"}>
                       Visit Details The Blog <FontAwesomeIcon icon={ faWeebly } />
                      </a>
                    </div>
                  }
                </section>
              )}
            </Col>
            <Col md={8}>
              {content && content.image && (
                <div className="pro_details_pic">
                  <Image
                    thumbnail
                    className="w-100"
                    fluid
                    src={content.image.display_url}
                  />
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
