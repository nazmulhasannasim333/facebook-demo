import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
import MainContent from '../MainContent/MainContent';
import RightSide from '../RightSide/RightSide';

const Home = () => {
    return (
        
        <div >
            <Container fluid>
        <Row>
        <Col><LeftSide /></Col>
        <Col xs={6}><MainContent /></Col>
        <Col><RightSide /></Col>
      </Row>
      </Container>
        </div>
    );
};

export default Home;