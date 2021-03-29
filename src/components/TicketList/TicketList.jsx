/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleShowMore } from "../../redux/actions";
// import Ticket from "../Ticket/Ticket";
// import checkFilter from "../../utilsfilter";

import styles from "./TicketList.module.scss";

const TicketList = () => {
  const tickets = useSelector((state) => state.tickets);
  // const { cheaply, faster } = useSelector((state) => state.tabTickets);
  const dispatch = useDispatch();

  // if (cheaply) {
  //   tickets.sort((prev, next) => {
  //     if (prev.price < next.price) return -1;
  //     if (prev.price < next.price) return 1;
  //   });
  // }
  // if (faster) {
  //   tickets.sort((prev, next) => {
  //     if (prev.segments[0].duration < next.segments[0].duration) return -1;
  //     if (prev.segments[0].duration < next.segments[0].duration) return 1;
  //   });
  // }

  // const arrs = checkFilter(without, one, two, three, tickets);
  // let key = 1;

  // /* eslint-disable-next-line */
  // const ticketList =
  //   arrs.length &&
  //   arrs.map((ticket, i) => {
  //     key += 1;
  //     if (i < ticketsForView) {
  //       return <Ticket key={key} ticket={ticket} />;
  //     }
  //   });

  return (
    <div className={styles.root}>
      {/* {ticketList} */}
      {tickets.length && (
        <button
          className={styles.button}
          type="button"
          onClick={(e) => dispatch(handleShowMore(e))}
        >
          ПОКАЗАТЬ ЕЩЕ
        </button>
      )}
    </div>
  );
};

export default TicketList;
