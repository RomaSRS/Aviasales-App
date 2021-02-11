import React from 'react';
import PropTypes from 'prop-types';
import { getStartAndFinishTime, formatDuration, getPluralForm } from '../../utils';
import styles from './Segment.module.scss';


const Segment = ({ segment }) => {
  const {
    origin,
    destination,
    date,
    duration,
    stops,
  } = segment;
  return (
    <div key={date} className={styles.segment}>
      <div>
        <div className={styles.label}>
          {`${origin} ‒ ${destination}`}
        </div>
        <div className={styles.info}>
          {getStartAndFinishTime(date, duration)}
        </div>
      </div>
      <div>
        <div className={styles.label}>В ПУТИ</div>
        <div className={styles.info}>
          {formatDuration(duration)}
        </div>
      </div>
      <div>
        <div className={styles.label}>
          {stops.length === 0
            ? 'БЕЗ ПЕРЕСАДОК'
            : `${stops.length} ${getPluralForm(stops.length, ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК'])}`}
        </div>
        <div className={styles.info}>
          {stops.join(', ')}
        </div>
      </div>
    </div>
  );
};

Segment.propTypes = {
  segment: PropTypes.shape({
    origin: PropTypes.string,
    destination: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.number,
    stops: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Segment;
