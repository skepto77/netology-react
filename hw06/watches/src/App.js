import './App.css';

import { Container } from 'react-bootstrap';
import ClockDashboard from './components/ClockDashboard';
function App() {
  return (
    <Container className='App mt-3'>
      <ClockDashboard />
    </Container>
  );
}

export default App;
