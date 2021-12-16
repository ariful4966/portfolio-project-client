import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from 'react-redux';
import Footer from "../../partials/Footer/Footer";
import Header from "../../partials/Header/Header";
import Loading from "../../partials/Loading/Loading";
import ProjectItem from "../Project/ProjectItem/ProjectItem";

const Mobile = () => {
  
  const project = useSelector(state=> state.mobile);

  
    console.log(project);
  
  return (
    <div className="projectPage">
      <Header />
      <div className="section_padding">
        <Container>
          <Row>
            { !project && project.length === 0 ? (
              <Loading />
            ) : (
              project.map((project) => (
                <ProjectItem project={project} key={project}></ProjectItem>
              ))
            )}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};


export default Mobile;