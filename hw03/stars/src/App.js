import React from 'react';
import Stars from './components/Stars/Stars';
import { uniqueId } from 'lodash';
import './App.css';

function App() {
  const count = Math.floor(Math.random() * 10);

  return (
    <>
      {count > 0 && count <= 5 && !Number.isNaN(count) && (
        <Stars count={count} key={uniqueId('stars_')} />
      )}
    </>
  );
}

export default App;
