import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const setActive = ({ isActive }) =>
  isActive ? 'menu__item menu__item-active' : 'menu__item';

const Layout = () => {
  return (
    <>
      <header>
        <nav className='menu'>
          <NavLink to='/' className={setActive}>
            Главная
          </NavLink>
          <NavLink to='/drift' className={setActive}>
            Дрифт-такси
          </NavLink>
          <NavLink to='/timeattack' className={setActive}>
            Time Attack
          </NavLink>
          <NavLink to='/forza' className={setActive}>
            Forza Karting
          </NavLink>
        </nav>
      </header>

      <main className='page'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
