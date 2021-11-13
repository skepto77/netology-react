import React from 'react';

import StepsDashboard from './components/StepsDashboard/StepsDashboard';
import { Container } from 'react-bootstrap';

import './App.css';

const App = () => (
  <Container className='p-3'>
    <h1 className='header text-center'>Учёт тренировок</h1>
    <StepsDashboard />
  </Container>
);

export default App;
