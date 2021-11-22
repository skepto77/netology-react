import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {
  const [userId, setUserId] = useState(null);
  const getUserId = (id) => setUserId(id);
  return (
    <Container className='App'>
      <Row>
        <Col>
          <UserList getUserId={getUserId} />
        </Col>
        <Col>
          <UserDetails id={userId} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
