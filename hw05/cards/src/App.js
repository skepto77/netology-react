import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column'>
      <Card>
        <h5 className='card-title'>Card title</h5>
        <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='https://reactjs.org/' className='btn btn-primary'>
          Go somewhere
        </a>
      </Card>

      <Card image={'https://via.placeholder.com/300.png'}>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className='card-text'>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </p>
      </Card>

      <Card>
        <h5 className='card-title'>Card title</h5>
        <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='https://reactjs.org/' className='card-link'>
          Card link
        </a>
        <a href='https://ru.reactjs.org/' className='card-link'>
          Another link
        </a>
      </Card>
    </div>
  );
}

export default App;
