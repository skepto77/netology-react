import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import ListAddItemForm from './components/ListAddItemForm';
import ListEditItemForm from './components/ListEditItemForm';
import ListFilterForm from './components/ListFilterForm';
import List from './components/List';

import './App.css';

function App() {
  const { status } = useSelector((state) => state.list);
  return (
    <Container className='App'>
      <ListFilterForm />
      {status === 'addition' && <ListAddItemForm />}
      {status === 'editing' && <ListEditItemForm />}
      <List />
    </Container>
  );
}

export default App;
