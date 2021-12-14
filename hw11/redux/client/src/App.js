import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import List from './pages/List';
import ItemEdit from './pages/ItemEdit';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='services' element={<List />} />
        <Route path='services/:id' element={<ItemEdit />} />
        <Route path='/' element={<Navigate replace to='services' />} />
      </Route>
    </Routes>
  );
}

export default App;
