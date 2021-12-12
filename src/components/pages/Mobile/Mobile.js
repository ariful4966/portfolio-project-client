import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../partials/Header/Header';
import Footer from '../../partials/Footer/Footer';

const Mobile = () => {
    return (
        <div className="mobile_Area">
            <Header/>
            <Container>
                <Row>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-app-development-4280045-3561176.png" alt="" />
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default Mobile;