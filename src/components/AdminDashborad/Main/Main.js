import { faPlusSquare, faTh, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import PageTitle from '../AdminPartials/PageTitle';
import CreatePost from '../CreatePost/CreatePost';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import SideMenu from '../SideMenu/SideMenu';
import './Main.css';
import '../AdminPartials/AdminParials.css'

const Main = () => {
    const match= useRouteMatch()
    console.log(match);
    const [pageTitle, setPageTitle]=useState('Dashboard')
    const menuItem = [
        {
            menu: 'Dashboard',
            title: 'Dashboard',
            url: '',
            icon : faTh
        },
        {
            menu: 'Create Post',
            title: 'Create A New Web App  Post',
            url: '/create',
            icon : faPlusSquare,
        },
        {
            menu: 'Profile',
            title: 'Your Profile Information',
            url: '/profile',
            icon : faUser,
        }
    ]
    
    return (
        <div className="dashbord_main">
            
            <Container fluid>
                <Row>
                    <Col md={3}></Col>
                    <Col md={9}>
                    <PageTitle>{pageTitle}</PageTitle>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}> 
                        <SideMenu menu={menuItem} setPageTitle={setPageTitle}/>
                    </Col>
                    <Col md={9}> 
                        <div className="dashboard_content p-4" >
                            <Switch>
                                
                                <Route path={`${match.path}/create`}>
                                    <CreatePost/>
                                </Route>
                                <Route path={`${match.path}/profile`}>
                                    <Profile/>
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