import { combineReducers } from 'redux';

import {
  TICKETS_GET_REQUEST,
  TICKETS_GET_SUCCESS,
  TICKETS_GET_FAILURE,
  FETCHING_DONE,
  STOPS_FILTER_CHANGE,
  SORTING_PARAM_CHANGE,
  CHANGE_NUMBER_OF_TICKETS,
} from '../actions';

const tickets = (state = [], { type, payload: ticketBatch }) => {
  switch (type) {
    case TICKETS_GET_SUCCESS:
      return [...state, ...ticketBatch];
    default:
      return state;
  }
};

const fetchingState = (state = 'none', { type }) => {
  switch (type) {
    case TICKETS_GET_REQUEST:
      return 'fetching';
    case TICKETS_GET_FAILURE:
      return 'failure';
    case FETCHING_DONE:
      return 'done';
    default:
      return state;
  }
};

const filters = (state = {}, { type, payload: newValue }) => {
  switch (type) {
    case STOPS_FILTER_CHANGE:
      return { stops: newValue };
    default:
      return state;
  }
};

const sortBy = (state = '', { type, payload: sortingParam }) => {
  switch (type) {
    case SORTING_PARAM_CHANGE:
      return sortingParam;
    default:
      return state;
  }
};

const numberOfTickets = (state = 5, { type }) => {
  switch (type) {
    case CHANGE_NUMBER_OF_TICKETS:
      return state + 5;
    default:
      return state;
  }
};

const isError = (state = false, { type }) => {
  switch (type) {
    case TICKETS_GET_FAILURE:
      return true;
    case TICKETS_GET_SUCCESS:
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
