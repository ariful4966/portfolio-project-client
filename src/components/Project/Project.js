import React, { useState, useEffect } from 'react';
import './Project.css';
import { Container, Row, Col } from 'react-bootstrap';

import ProjectItem from './ProjectItem/ProjectItem';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const project = projects;
    useEffect(() => {
        fetch('https://portfolio-server-00.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => {
                // const projectData = data.slice(0,3);
                setProjects(data);
            })
    }, [projects]);

    return (
        <div className="projectPage">
            <Container>
                <Row>
                    {
                        project.map(project => <ProjectItem project={project}></ProjectItem>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Project;