import React from 'react';
import styles from './Header.module.scss';
import logo from './resources/logo.svg';

const Header = React.memo(() => (
  <header className={styles.root}>
    <img src={logo} className={styles.logo} alt="" />
  </header>
));

export default Header;
