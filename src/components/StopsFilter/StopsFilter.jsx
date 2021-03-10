import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { omit } from '../../utils';
import Checkbox from '../Checkbox/Checkbox';
import stopsFilterList from './stopsFilterList';
import styles from './StopsFilter.module.scss';

const allValues = stopsFilterList.reduce((acc, item) => ({ ...acc, [item.value]: true }), {});
class StopsFilter extends React.PureComponent {
  handleCheck = (checked, value) => {
    const { filterValue, handleFilterChange } = this.props;
    console.log(this.props);
    let newValue;
    if (checked) {
      newValue = { ...filterValue, [value]: true };
    } else {
      newValue = omit(`${value}`, filterValue);
    }
    if (Object.keys(newValue).length === 0) {
      newValue = null;
    }

    handleFilterChange(newValue);
  }

  handleAllCheck = (checked) => {
    const { handleFilterChange } = this.props;
    const newValue = checked ? allValues : null;
    handleFilterChange(newValue);
  }

  render() {
    const { filterValue } = this.props;
    const checkedAll = filterValue === null;
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>Количество пересадок</h2>
        <Checkbox value="all" checked={checkedAll} label="Все" onCheck={this.handleAllCheck} />
        {stopsFilterList.map(({ label, value }) => (
          <Checkbox
            key={uuid()}
            value={value}
            checked={checkedAll || !(filterValue.hasOwnProperty(value))}
            label={label}
            onCheck={this.handleCheck}
          />
        ))}
      </div>
    );
  }
}

StopsFilter.propTypes = {
  handleFilterChange: PropTypes.func,
  filterValue: PropTypes.objectOf(PropTypes.bool),
};

export default StopsFilter;
