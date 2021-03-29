import React from 'react';
import PropTypes from 'prop-types';
import image from './resources/preloader.svg';
import styles from './Loading.module.scss';
import classNames from 'classnames';

const Loading = React.memo(({ isLoading }) => (
  <div className={classNames(styles.root, {[styles.visible] : isLoading, [styles.hidden]: !isLoading})}>
    <img src={image} alt="" />
  </div>
));

Loading.propTypes = ({
  isLoading: PropTypes.bool,
});

export default Loading;
