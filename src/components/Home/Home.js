import React, { useState, useEffect } from 'react';
import './Home.css';
import Slider from '../Slider/Slider';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const [project, setProject] = useState([]);
    const projects = project.slice(0, 3);
    const [blog, setBlog] = useState([]);
    const blogs = blog.slice(0, 3);
    useEffect(() => {
        fetch('https://portfolio-server-00.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => {
                setProject(data);
            })
    }, []);

    useEffect(() => {
        fetch('https://portfolio-server-00.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {

                setBlog(data);
            })
    }, []);
    return (
        <div className="homePage">
            <Slider></Slider>
            <div className="projectHome latestProject">
                <Container>
                    <div className="homeHeading">
                        <h2>Latest Projects</h2>
                    </div>
                    <Row>

                        {
                            projects.map(pro =>
                                <Col md={4}>
                                    <div className="singleItem">
                                        <div className="singlePic">
                                            <img src={pro.img} alt="" />
                                        </div>
                                        <div className="singleDetail">
                                            <h4 className="itemHeading">
                                                {pro.name}
                                            </h4>
                                            <p>{pro.about}</p>
                                            <a href={pro.url} > View Website</a>
                                        </div>
                                    </div>
                                </Col>
                            )
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
                            blogs.map(pro =>
                                <Col md={4}>
                                    <div className="singleItem">
                                        <div className="singlePic">
                                            <img src={pro.img} alt="" />
                                        </div>
                                        <div className="singleDetail">
                                            <h4 className="itemHeading">
                                                {pro.name}
                                            </h4>
                                            <p>{pro.about}</p>
                                            <a href={pro.url} > View Website</a>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }

                    </Row>
                </Container>
            </div>
            {/* Project Home Page End */}

        </div>
    );
};

export default Home;