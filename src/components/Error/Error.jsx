import React from 'react';
import styles from './Error.module.scss';

const Error = React.memo(() => (
  <div className={styles.root}>
    ОШИБКА
  </div>
));

export default Error;
