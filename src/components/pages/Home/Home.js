import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../Header/Header";
import "./Home.css";

const Home = () => {
  const [project, setProject] = useState([]);
  const [blog, setBlog] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:4000/project")
      .then(res=>res.json())
      .then(data=>setProject(data))

    axios
      .get("http://localhost:4000/blog")
      .then((res) => setBlog(res.data));
  }, [project, blog]);

  return (
    <div className="homePage_area">
      <Header home />
      <div className="projectHome latestProject">
        <Container>
          <div className="homeHeading">
            <h2>Latest Projects</h2>
          </div>
          <Row>
            {
                project.length === 0 ? <h1 style={{color: '#fff'}}>Loading...</h1> : 
                project.slice(0,3).map((pro) => (
                    <Col md={4}>
                      <div className="singleItem">
                        <div className="singlePic">
                          <img src={pro.img} alt="" />
                        </div>
                        <div className="singleDetail">
                          <h4 className="itemHeading">{pro.name}</h4>
                          <p>{pro.about}</p>
                          <a href={pro.url}> View Website</a>
                        </div>
                      </div>
                    </Col>
                  ))
            }
          </Row>
        </Container>
      </div>
      {/* Project Home Page End */}
      <div className="projectHome latestBlog">
        <Container>
          <div className="homeHeading ">
            <h2>Latest Blogs</h2>
          </div>
          <Row>
            {
                blog.length === 0 ? <h1>Loading...</h1> :
                blog.slice(0,3).map((pro) => (
                    <Col md={4}>
                      <div className="singleItem">
                        <div className="singlePic">
                          <img src={pro.img} alt="" />
                        </div>
                        <div className="singleDetail">
                          <h4 className="itemHeading">{pro.name}</h4>
                          <p>{pro.about}</p>
                          <a href={pro.url}> View Website</a>
                        </div>
                      </div>
                    </Col>
                  ))
            }
          </Row>
        </Container>
      </div>
      {/* Project Home Page End */}
    </div>
  );
};

export default Home;
