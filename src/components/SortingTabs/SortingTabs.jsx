import React from 'react';
import PropTypes from 'prop-types';
// import * as actions from '../../redux/actions';

import SortingButton from './SortingButton';
import sortingTabsList from './sortingTabsList';
import styles from './SortingTabs.module.scss';
import classNames from 'classnames';

class SortingTabs extends React.PureComponent {
  handleClick = (sortingParam) => () => {
    const { handleTabChange } = this.props;
    handleTabChange(sortingParam);
    console.log('fuck');
  }

  render() {
    const { sortBy } = this.props;
    return (
      <div className={styles.root}>
        {sortingTabsList.map(({
          name,
          label,
          isFirst,
          isLast,
        }) => {
          const active = sortBy === name;

          return (
            <SortingButton
              key = {name}
              name = {name}
              label = {label}
              type = "button"
              handleClick = {this.handleClick}
              className = {classNames(styles.button, {[styles.first] : isFirst}, {[styles.last] : isLast}, {[styles.active] : active})}
            />
          );
        })}
      </div>
    );
  }
}

SortingTabs.propTypes = ({
  handleTabChange: PropTypes.func,
  sortBy: PropTypes.string,
});

export default SortingTabs;
