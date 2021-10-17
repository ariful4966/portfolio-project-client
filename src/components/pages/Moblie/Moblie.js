import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import Title from '../../partials/Title';

const Moblie = () => {
    return (
        <div className="mobile_Area">
            <Header/>
            <Container>
                <Row>
                    <Title h2 >There are no content here</Title>
                </Row>
            </Container>
        </div>
    );
};

export default Moblie;