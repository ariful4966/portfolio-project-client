import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../partials/Footer/Footer";
import Header from "../../partials/Header/Header";
import Loading from "../../partials/Loading/Loading";
import "./Project.css";
import ProjectItem from "./ProjectItem/ProjectItem";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const project = projects;
  useEffect(() => {
    fetch("https://web-portfolio-server.herokuapp.com/project")
      .then((res) => res.json())
      .then((data) => {
        // const projectData = data.slice(0,3);
        setProjects(data);
      });
  }, [projects]);

  return (
    <div className="projectPage">
      <Header />
      <div className="section_padding">
        <Container>
          <Row>
            {
              project.length === 0 ? <Loading/> 
              : project.map((project) => (
                <ProjectItem project={project}></ProjectItem>
              ))
            }
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default Project;
