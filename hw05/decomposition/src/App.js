import React from 'react';
import Adv from './components/Adv';
import Search from './components/Search';
import Logo from './components/Logo';
import Service from './components/Service';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Service title={'Новости'}></Service>
        </Col>
      </Row>
      <Row>
        <Col>
          <Service title={'Курсы валют'}></Service>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={2}>
          <Logo />
        </Col>
        <Col xs={12} md={10}>
          <Search />
        </Col>
      </Row>
      <Row>
        <Col>
          <Adv />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Service title={'Погода'}></Service>
          <Service title={'Карты'}></Service>
        </Col>
        <Col xs={12} md={4}>
          <Service title={'Эфир'}></Service>
          <Service title={'Посещаемое'}></Service>
        </Col>
        <Col xs={12} md={4}>
          <Service title={'Телепрограмма'}></Service>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
