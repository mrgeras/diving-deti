import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar(): JSX.Element {
  return (
    <>
      <nav className="header">
        <div className={styles.abs}>
          <nav className={styles.navBody}>
            <div className={styles.navItems}>
              <Link to="/" className={styles.link} data-item="Главная">
                Главная
              </Link>
            </div>
            <div className={styles.navItems}>
              <Link to="/courses" className={styles.link} data-item="Курсы">
                Курсы
              </Link>
            </div>
            <div className={styles.navItems}>
              <Link to="/" className={styles.link} data-item="Новости">
                Новости
              </Link>
            </div>
            <div className={styles.navItems}>
              <Link
                to="/"
                className={styles.link}
                data-item="Статьи"
              >
                Статьи
              </Link>
            </div>
            <div className={styles.navItems}>
              <Link to="/" className={styles.link} data-item="О нас">
                О нас
              </Link>
            </div>
            <div>
              <Link to="/" data-item="Профиль">
                <img src="" alt="" style={{ width: '50px' }} />
              </Link>
            </div>
          </nav>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
