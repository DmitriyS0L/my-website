import React, { useState, useEffect } from 'react';
import { ReactComponent as User } from '../../assets/Image/user.svg';
import { ReactComponent as Login } from '../../assets/Image/login.svg';
import styles from './Header.module.scss';
import logo from '../../assets/Image/logo.png';

export const Header = () => {
  const [checkLogin, setCheckLogin] = useState(false);

  useEffect(() => {
    setCheckLogin(true);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navListLeft}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="/">
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="/about">
              Wallet
            </a>
          </li>
        </ul>
        <a className={styles.logoLink} href="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </a>
        <ul className={styles.navListRight}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="/contact">
              Contact
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="/about">
              About
            </a>
          </li>
        </ul>
        <a className={styles.navLinkUser}>
          {checkLogin ? (
            <User className={styles.navUser} />
          ) : (
            <Login className={styles.navUser} />
          )}
        </a>
      </nav>
    </header>
  );
};
