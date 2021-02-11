import React from 'react';
import PropTypes from 'prop-types';
import image from './resources/preloader.svg';
import styles from './Loading.module.scss';

const Loading = React.memo(({ isLoading }) => (
  <div className={`${styles.root} ${isLoading ? styles.visible : styles.hidden}`}>
    <img src={image} alt="" />
  </div>
));

Loading.propTypes = ({
  isLoading: PropTypes.bool,
});

export default Loading;
