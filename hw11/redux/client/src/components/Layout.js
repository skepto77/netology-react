import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Layout = () => {
  return (
    <Container>
      <header className='mb-3'></header>
      <main className='row d-flex justify-content-center align-items-center'>
        <div className='col-8'>
          <Outlet />
        </div>
      </main>
    </Container>
  );
};

export default Layout;
