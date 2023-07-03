import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './NavBar2.scss';
import logo from './logo2.png';
import { useAppSelector } from '../../Redux/store';

function NavBar(): JSX.Element {
  const { admin } = useAppSelector((store) => store.auth);
  return (
    <>
      <nav className="header">
        {/* <div>
          <div className="topnav2">
            <div className="logo">
              <img src={logo} alt="logo" width="100px" />
            </div>
            <div className="nums">
              <div>8 (812) 214 32 14</div>
              <div>8 (812) 214 32 14</div>
              <div>8 (812) 214 32 14</div>
            </div>
          </div>
          <div className="topnav">
            <div>
              <h1>ДАЙВИНГ И ПЛАВАНЬЕ ДЛЯ ДЕТЕЙ</h1>
            </div>
          </div>
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
              <Link to="/" className="link" data-item="Потом">
                Потом
              </Link>
            </div>
            <div className="navItems">
              <Link to="/about" className="link" data-item="О нас">
                О нас
              </Link>
            </div>
          </div>
        </div> */}
        <div className="topnav2">
          <div className="logo">
            <img src={logo} alt="logo" width="100px" />
          </div>
          <div className="CenterNav">
            <div className="topnav">
              <h1>ДАЙВИНГ И ПЛАВАНИЕ ДЛЯ ДЕТЕЙ</h1>
            </div>
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
                <Link to="/" className="link" data-item="Потом">
                  Потом
                </Link>
              </div>
              <div className="navItems">
                <Link to="/about" className="link" data-item="О нас">
                  О нас
                </Link>
              </div>
            </div>
          </div>
          <div className="nums">
            {admin && <div>ADMIN</div>}
            <div>8 (812) 214 32 14</div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
