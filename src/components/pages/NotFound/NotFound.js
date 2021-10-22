import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <Container>
            <div style={styles.container} >
                <img style={styles.image} src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-message-3702341-3119133.png" alt="404 Page not found" />
                <p>Back Home <a href="/">Home</a></p>
            </div>
        </Container>
    );
};
const styles = {
    container: {
        width: '100%'
    },
    image: {
        width: '100%',
        display: 'block'
    }
}

export default NotFound;