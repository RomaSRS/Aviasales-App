import { combineReducers } from 'redux';
import * as types from './types';


const tickets = (state = null, { type, payload: ticketBatch }) => {
  switch (type) {
    case types.TICKETS_GET_SUCCESS:
      return [...state, ...ticketBatch];
    default:
      return state;
  }
};

const fetchingState = (state = null, { type }) => {
  switch (type) {
    case types.TICKETS_GET_REQUEST:
      return 'fetching';
    case types.TICKETS_GET_FAILURE:
      return 'failure';
    case types.FETCHING_DONE:
      return 'done';
    default:
      return state;
  }
};

const filters = (state = null, { type, payload: newValue }) => {
  switch (type) {
    case types.STOPS_FILTER_CHANGE:
      return { stops: newValue };
    default:
      return state;
  }
};

const sortBy = (state = null, { type, payload: sortingParam }) => {
  switch (type) {
    case types.SORTING_PARAM_CHANGE:
      return sortingParam;
    default:
      return state;
  }
};

const numberOfTickets = (state = 5, { type }) => {
  switch (type) {
    case types.CHANGE_NUMBER_OF_TICKETS:
      return state + 5;
    default:
      return state;
  }
};

const isError = (state = null, { type }) => {
  switch (type) {
    case types.TICKETS_GET_FAILURE:
      return true;
    case types.TICKETS_GET_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  tickets,
  fetchingState,
  filters,
  sortBy,
  numberOfTickets,
  isError,
});
