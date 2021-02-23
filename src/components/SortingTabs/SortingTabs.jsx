import React from 'react';
import PropTypes from 'prop-types';
import SortingButton from './SortingButton';
import sortingTabsList from './sortingTabsList';
import styles from './SortingTabs.module.scss';

class SortingTabs extends React.PureComponent {
  handleClick = (sortingParam) => () => {
    const { handleTabChange } = this.props;
    handleTabChange(sortingParam);
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
              key={name}
              name={name}
              label={label}
              type="button"
              handleClick={this.handleClick}
              className={`${styles.button} ${isFirst ? styles.first : ''} ${isLast ? styles.last : ''} ${active ? styles.active : ''}`}
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
