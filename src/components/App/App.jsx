/* eslint-disable spaced-comment */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTickets } from "../../redux/actions";
import * as actions from "../../redux/actions";
import checkFilter from "../../utilsFilter";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import NoTickets from "../NoTickets/NoTickets";
import SortingTabs from "../SortingTabs/SortingTabs";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
// import TicketList from "../TicketList/TicketList";
import Ticket from "../Ticket/Ticket";
import styles from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);
  const fetchingState = useSelector((state) => state.fetchingState);
  const sortingParam = useSelector((state) => state.sortBy);
  const stopsFilterValue = useSelector((state) => state.filter.stops);
  const isError = useSelector((state) => state.isError);
  const myFilter = useSelector((state) => state.filter);
  const { without, one, two, three } = myFilter;
  const { cheaply, faster, ticketsForView } = useSelector((state) => state.tabTickets);

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  // eslint-disable-next-line
  if (cheaply) {
    // eslint-disable-next-line
    tickets.sort((prev, next) => {
      if (prev.price < next.price) return -1;
      if (prev.price < next.price) return 1;
    });
  }
  if (faster) {
    // eslint-disable-next-line
    tickets.sort((prev, next) => {
      if (prev.segments[0].duration < next.segments[0].duration) return -1;
      if (prev.segments[0].duration < next.segments[0].duration) return 1;
    });
  }

  const arr = checkFilter(without, one, two, three, tickets);
  let key = 1;

    // eslint-disable-next-line
    const ticketList =
    arr.length ?
    // eslint-disable-next-line
    arr.map((ticket, i) => {
      key += 1;
      if (i < ticketsForView) {
        return <Ticket key={key} ticket={ticket} />;
      }
    }) : null;

  const isLoading = fetchingState === "fetching";

  const someValue = useMemo(() => !ticketList && !isLoading && !isError, [
    ticketList,
    isLoading,
    isError,
  ]);

  return (
    <div>
      <Header />
      {isError && <div className={styles.error}>ОШИБКА</div>}
      <div className={styles.root}>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <CheckboxFilter
              filterValue={stopsFilterValue}
              handleFilterChange={() => dispatch(actions.dispatchClickOnFilter)}
            />
            <Loading isLoading={isLoading} />
          </aside>
          <section className={styles.main}>
            <SortingTabs
              sortBy={sortingParam}
              handleTabChange={() => dispatch(actions.getCheaplyTickets)}
            />
            {someValue && <NoTickets /> }
            {ticketList}
            {/* <TicketList
              tickets={tickets}
              isLoading={isLoading}
              handleShowMore={() => dispatch(actions.getTickets)}
            /> */}
            <div className={styles.root}>
              {ticketList && (
              <button
                className={styles.button}
                type="button"
                onClick={(e) => dispatch(actions.handleShowMore(e))}
              >
                ПОКАЗАТЬ ЕЩЕ
              </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
