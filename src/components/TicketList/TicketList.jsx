import React from 'react';
import PropTypes from 'prop-types';
import Ticket from '../Ticket/Ticket';
import styles from './TicketList.module.scss';

const TicketList = React.memo(({ tickets, handleShowMore }) => (
  <div className={styles.root}>
    {tickets.map((item) => <Ticket key={item.id} ticket={item} />)}
    {tickets.length > 0
      && <button className={styles.button} type="button" onClick={handleShowMore}>ПОКАЗАТЬ ЕЩЕ</button>}
  </div>
));

TicketList.propTypes = ({
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleShowMore: PropTypes.func,
});

export default TicketList;
