import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { ticketsToRenderSelector } from '../../selectors';
import Error from '../Error/Error';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import NoTickets from '../NoTickets/NoTickets';
import SortingTabs from '../SortingTabs/SortingTabs';
import StopsFilter from '../StopsFilter/StopsFilter';
import TicketList from '../TicketList/TicketList';
import styles from './App.module.scss';

const mapStateToProps = (state) => {
  const {
    fetchingState,
    sortBy,
    filters,
    isError,
  } = state;
  const props = {
    fetchingState,
    isError,
    sortingParam: sortBy,
    tickets: ticketsToRenderSelector(state),
    stopsFilterValue: filters.stops,
  };
  return props;
};

const actionCreators = {
  changeSortingParam: actions.changeSortingParam,
  changeStopsFilter: actions.changeStopsFilter,
  changeNumberOfTickets: actions.changeNumberOfTickets,
  getTickets: actions.getTickets,
};

class App extends React.Component {
  componentDidMount() {
    const { getTickets } = this.props;
    getTickets();
  }

  render() {
    const {
      tickets,
      fetchingState,
      stopsFilterValue,
      sortingParam,
      changeStopsFilter,
      changeSortingParam,
      changeNumberOfTickets,
      isError,
    } = this.props;
    const isLoading = fetchingState === 'fetching';
    return (
      <>
        <Header />
        {isError ? <Error /> : null}
        <div className={styles.root}>
          <div className={styles.container}>
            <aside className={styles.sidebar}>
              <StopsFilter filterValue={stopsFilterValue} handleFilterChange={changeStopsFilter} />
              <Loading isLoading={isLoading} />
            </aside>
            <section className={styles.main}>
              <SortingTabs sortBy={sortingParam} handleTabChange={changeSortingParam} />
              {!tickets.length && !isLoading && !isError ? <NoTickets /> : null}
              <TicketList
                tickets={tickets}
                isLoading={isLoading}
                handleShowMore={changeNumberOfTickets}
              />
            </section>
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = ({
  getTickets: PropTypes.func,
  changeSortingParam: PropTypes.func,
  changeStopsFilter: PropTypes.func,
  changeNumberOfTickets: PropTypes.func,
  fetchingState: PropTypes.string,
  sortingParam: PropTypes.string,
  tickets: PropTypes.arrayOf(PropTypes.object),
  stopsFilterValue: PropTypes.objectOf(PropTypes.bool),
  isError: PropTypes.bool,
});

export default connect(mapStateToProps, actionCreators)(App);
