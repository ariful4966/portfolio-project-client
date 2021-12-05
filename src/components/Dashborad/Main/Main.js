import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import CreatePost from '../CreatePost/CreatePost';
import Dashboard from '../Dashboard/Dashboard';
import SideMenu from '../SideMenu/SideMenu';
import './Main.css'

const Main = () => {
    const match= useRouteMatch()
    return (
        <div className="dashbord_main">
            
            <Container fluid>
                <Row>
                    <Col md={3}></Col>
                    <Col md={9}>
                    <div className="title_bar">
                        <h2>Dashboard</h2>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}> 
                        <SideMenu/>
                    </Col>
                    <Col md={9}> 
                        <div className="dashboard_content p-4" >
                            <Switch>
                                
                                <Route path={`${match.path}/create`}>
                                    <CreatePost/>
                                </Route>
                                <Route path={`${match.path}`}>
                                    <Dashboard/>
                                </Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Main;