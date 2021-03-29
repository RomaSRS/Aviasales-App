/* eslint-disable spaced-comment */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTickets } from "../../redux/actions";
import * as actions from "../../redux/actions";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import NoTickets from "../NoTickets/NoTickets";
import SortingTabs from "../SortingTabs/SortingTabs";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import TicketList from "../TicketList/TicketList";
import styles from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);
  const fetchingState = useSelector((state) => state.fetchingState);
  const sortingParam = useSelector((state) => state.sortBy);
  const stopsFilterValue = useSelector((state) => state.filter.stops);
  const isError = useSelector((state) => state.isError);
  
  useEffect(() => {
    dispatch(getTickets());
  }, []);

  const isLoading = fetchingState === "fetching";

  const someValue = useMemo(() => !tickets && !isLoading && !isError, [
    tickets,
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
            {tickets}
            <TicketList
              tickets={tickets}
              isLoading={isLoading}
              handleShowMore={() => dispatch(actions.getTickets)}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
