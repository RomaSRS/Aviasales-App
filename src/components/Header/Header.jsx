import React from 'react';
import Pulse from 'react-reveal/Pulse';
import styles from './Header.module.scss';
import logo from './resources/logo.svg';

const Header = React.memo(() => (
  <header className={styles.root}>
    <Pulse>
      <img src={logo} className={styles.logo} alt="" />
    </Pulse>
  </header>
));

export default Header;
