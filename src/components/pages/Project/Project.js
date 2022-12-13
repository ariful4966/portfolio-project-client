import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from 'react-redux';
import Cookies from "universal-cookie";
import Footer from "../../partials/Footer/Footer";
import Header from "../../partials/Header/Header";
import Loading from "../../partials/Loading/Loading";
import "./Project.css";
import ProjectItem from "./ProjectItem/ProjectItem";
const cookies = new Cookies();

const Project = () => {
  
  const project = useSelector(state=> state.web);

  const token = cookies.get("ariful");


  
  return (
    <div className="projectPage">
      <Header />
      <div className="section_padding">
        <Container>
          <Row>
            {project.length === 0 ? (
              <Loading />
            ) : (
              project.map((project) => (
                <ProjectItem project={project} key={project._id}></ProjectItem>
              ))
            )}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
