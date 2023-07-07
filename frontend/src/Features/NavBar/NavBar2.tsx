import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './NavBar2.scss';
import logo from './logo2.png';
import { useAppSelector } from '../../Redux/store';

function NavBar(): JSX.Element {
  const { admin } = useAppSelector((store) => store.auth);
  const handleAdminClick = () => {
    window.location.href = '/admin';
  };
  const handlemainClick = () => {
    window.location.href = '/';
  };

  return (
    <>
      <nav className="header">
        <div className="topnav2">
          <div className="logo">
            <img
              src={logo}
              onClick={handlemainClick}
              alt="logo"
              width="150px"
            />
          </div>
          <div className="CenterNav">
            <div className="topnav">
              <h1>ДАЙВИНГ И ПЛАВАНИЕ ДЛЯ ДЕТЕЙ</h1>
            </div>
            <div className="navBody">
              <div className="navItems">
                <NavLink to="/" className="link" data-item="Главная">
                  Главная
                </NavLink>
              </div>
              <div className="navItems">
                <NavLink to="/courses" className="link" data-item="Курсы">
                  Курсы
                </NavLink>
              </div>
              <div className="navItems">
                <NavLink to="/messages" className="link" data-item="Новости">
                Статьи
                </NavLink>
              </div>
              <div className="navItems">
                <NavLink to="/articles" className="link" data-item="Статьи">
                  Новости
                </NavLink>
              </div>
              <div className="navItems">
                <NavLink to="/price" className="link" data-item="Потом">
                  Цены
                </NavLink>
              </div>
              <div className="navItems">
                <NavLink to="/about" className="link" data-item="О нас">
                  О нас
                </NavLink>
              </div>
            </div>
          </div>
          <div className="nums">
            {admin && (
              <div className="admintext" onClick={handleAdminClick}>
                ADMIN
              </div>
            )}
            <a className="tel" href="tel:+78127038643">
              +7 (812) 703-86-43
            </a>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
