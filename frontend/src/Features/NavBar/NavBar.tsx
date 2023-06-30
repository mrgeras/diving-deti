import React from 'react';
import { Outlet } from 'react-router-dom';

function NavBar(): JSX.Element {
  return (
    <>
      <nav className="header">NavBar</nav>
      <Outlet />
    </>
  );
}

export default NavBar;
