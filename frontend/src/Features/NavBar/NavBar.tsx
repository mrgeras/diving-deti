import React from 'react';
import { Outlet } from 'react-router-dom';

function NavBar(): JSX.Element {
  return (
    <div>
      <nav className="navbar">NavBar</nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
