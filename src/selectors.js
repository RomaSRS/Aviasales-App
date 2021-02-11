import { createSelector } from 'reselect';

const getTickets = (state) => state.tickets;
const getUncheckedStops = (state) => state.filters.stops;
const getSortingParams = (state) => state.sortBy;
const getNumberOfTickets = (state) => state.numberOfTickets;

const filteredTicketsSelector = createSelector(
  [getTickets, getUncheckedStops],
  (tickets, uncheckedStops) => {
    if (uncheckedStops === null) return tickets;
    return tickets.filter(({ maxStops }) => !(uncheckedStops.hasOwnProperty(maxStops)));
  },
);

const filteredAndSortedTicketsSelector = createSelector(
  [filteredTicketsSelector, getSortingParams],
  (filteredTickets, sortingParams) => {
    switch (sortingParams) {
      case 'price':
        return filteredTickets.slice().sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
        });
      case 'duration':
        return filteredTickets.slice().sort((a, b) => {
          if (a.totalDuration > b.totalDuration) return 1;
          if (a.totalDuration < b.totalDuration) return -1;
          return 0;
        });
      default:
        return 0;
    }
  },
);

const ticketsToRenderSelector = createSelector(
  [filteredAndSortedTicketsSelector, getNumberOfTickets],
  (tickets, number) => tickets.slice(0, number),
);

export { ticketsToRenderSelector };
