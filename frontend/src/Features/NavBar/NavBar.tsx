import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar(): JSX.Element {
  return (
    <>
      <nav className="header">
        <div className="navBody">
          <div className="navItems">
            <Link to="/" className="link" data-item="Главная">
              Главная
            </Link>
          </div>
          <div className="navItems">
            <Link to="/courses" className="link" data-item="Курсы">
              Курсы
            </Link>
          </div>
          <div className="navItems">
            <Link to="/messages" className="link" data-item="Новости">
              Новости
            </Link>
          </div>
          <div className="navItems">
            <Link to="/articles" className="link" data-item="Статьи">
              Статьи
            </Link>
          </div>
          <div className="navItems">
            <Link to="/" className="link" data-item="О нас">
              О нас
            </Link>
          </div>
          <div>
            <Link to="/" data-item="Профиль">
              <img src="" alt="" style={{ width: '50px' }} />
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
