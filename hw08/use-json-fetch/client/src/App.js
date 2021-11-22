import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Result from './components/Result';

function App() {
  return (
    <Container className='App'>
      <Row>
        <Col>
          <Result url={'http://localhost:7070/data'} />
          <Result url={'http://localhost:7070/error'} />
          <Result url={'http://localhost:7070/loading'} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
