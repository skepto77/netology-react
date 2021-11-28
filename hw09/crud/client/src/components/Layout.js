import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Layout = () => {
  return (
    <Container>
      <header className='mb-3'>
        <Navbar bg='light' variant='light'>
          <Container>
            <NavLink to='/'>
              <Navbar.Brand>Posts</Navbar.Brand>
            </NavLink>
            <Nav className='align-self-end'>
              <NavLink
                to='/posts/new'
                className='btn btn-primary align-self-end'
              >
                Создать пост
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <main className='page'>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
