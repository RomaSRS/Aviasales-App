import { combineReducers } from 'redux';
import * as types from './types';
import filter from './filter';

const initialState = {
  cheaply: true,
  faster: false,
  fetchingState: 0,
  isError: false,
  ticketsForView: 5,
};

const tickets = (state = initialState, { type, payload: ticketBatch }) => {
  switch (type) {
    case types.TICKETS_GET_SUCCESS:
      return [...state, ...ticketBatch];
    default:
      return state;
  }
};

const fetchingState = (state = initialState, { type }) => {
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

const tabTickets = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHEAPLY_TICKETS':
      return { ...state, cheaply: true, faster: false };
    case 'HANDLE_SHOW_MORE':
      return {
        ...state,
        ticketsForView: state.ticketsForView + 5,
      };
    case 'GET_FASTEST_TICKETS':
      return { ...state, faster: true, cheaply: false };

    default:
      return state;
  }
};

const isError = (state = initialState, { type }) => {
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
  filter,
  tabTickets,
  isError,
});
