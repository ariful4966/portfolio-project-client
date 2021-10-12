import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../Header/Header";
import "./Project.css";
import ProjectItem from "./ProjectItem/ProjectItem";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const project = projects;
  useEffect(() => {
    fetch("http://localhost:4000/project")
      .then((res) => res.json())
      .then((data) => {
        // const projectData = data.slice(0,3);
        setProjects(data);
      });
  }, [projects]);

  return (
    <div className="projectPage">
      <Header />
      <div className="page_padding">
        <Container>
          <Row>
            {project.map((project) => (
              <ProjectItem project={project}></ProjectItem>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Project;
