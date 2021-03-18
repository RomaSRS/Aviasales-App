import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from '../Ticket/Ticket';
import styles from './TicketList.module.scss';

const TicketList = React.memo(({ tickets, handleShowMore }) => {
  const myTickets = tickets;
  const {cheaply, faster} = useSelector((state) => state.tabTickets);

  if (cheaply) {
    myTickets.sort((prev, next) => {
      if (prev.price < next.price) return -1;
      if (prev.price < next.price) return 1;
    });
  }
  if (faster) {
    myTickets.sort((prev, next) => {
      if (prev.segments[0].duration < next.segments[0].duration) return -1;
      if (prev.segments[0].duration < next.segments[0].duration) return 1;
    });
  }
  
return (
  <div className={styles.root}>
    {myTickets.map((item,i) => i< 10? <Ticket key={item.id} ticket={item} />: null)}
    {myTickets.length > 0
      && <button className={styles.button} type="button" onClick={handleShowMore}>ПОКАЗАТЬ ЕЩЕ</button>}
  </div>
)});

TicketList.propTypes = ({
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleShowMore: PropTypes.func,
});

export default TicketList;
