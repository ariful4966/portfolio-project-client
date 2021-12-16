import {
  faGithub, faWeebly
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Footer from "../../partials/Footer/Footer";
import Header from "../../partials/Header/Header";
import Loading from "../../partials/Loading/Loading";
import Services from "../../partials/Services/Services";
import SubTitle from "../../partials/SubTitle";
import Title from "../../partials/Title";
import "./Home.css";

const Home = () => {
  const history = useHistory()
  const project = useSelector(state=> state.web.reverse())
  const blog = useSelector(state=> state.blog.reverse())
  
  return (
    <div className="homePage_area">
      <Header home />
      <Services />
      <div className="projectHome latestProject section_padding">
        <Container>
          <div className="homeHeading">
            <Title h2 heading>
              Latest Website Projects
            </Title>
          </div>
          <Row>
            {project.length === 0 ? (
              <Loading />
            ) : (
              project.slice(0, 3).map((pro) => (
                <Col md={4} key={pro._id} className="mb-4">
                  <div className="singleItem" >
                    <div className="singlePic">
                      <img src={pro.image.display_url} alt="" />
                    </div>
                    <div className="singleDetail">
                      <div>
                        <h4 className="itemHeading">{pro.title}</h4>
                        <p>{pro.body.slice(0, 100)} ...</p>
                        <a href={pro.url.webUrl} target={"_blank"}> <FontAwesomeIcon icon={faWeebly}/></a>
                        <a href={pro.url.gitUrl} target={"_blank"}> <FontAwesomeIcon icon={faGithub}/> </a>
                        <span onClick={()=>history.push(`${pro._id}`)}>Read More.</span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </div>
      {/* Project Home Page End */}
      <div className="projectHome latestBlog section_padding">
        <Container>
          <div className="homeHeading ">
            <Title h2 heading>
              Latest Blogs
            </Title>
          </div>
          <Row>
            {blog.length === 0 ? (
              <Loading />
            ) : (
              blog.slice(0, 3).map((pro) => (
                <Col md={4} key={pro._id} className="mb-4">
                  <div className="singleBlogItem" >
                    <div className="singlePic">
                      <img src={pro.image.display_url} alt="" />
                    </div>
                    <div className="singleDetail">
                      <div>
                        <SubTitle h4 className="itemHeading">{pro.title}</SubTitle>
                        <p>{pro.body.slice(0,100)}..</p>
                        <a href={pro.website} target={"_blank"}> <FontAwesomeIcon icon={faWeebly}/></a>
                        <span onClick={()=>history.push(`${pro._id}`)}>Read More.</span>
                      </div>
                    </div>
                  </div>
                </Col> 
              ))
            )}
          </Row>
        </Container>
      </div>
      {/* Project Home Page End */}
      <Footer />
    </div>
  );
};

export default Home;
