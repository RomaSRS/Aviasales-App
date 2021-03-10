import { addIdsMaxStopsAndTotalDuration } from '../utils';
import { getTicketBatchRes, getSearchId } from '../fetch';
import * as types from './types';

export const getTicketsRequest = () => ({ type: types.TICKETS_GET_REQUEST });

export const getTicketsSuccess = (ticketBatch) => (
  { type: types.TICKETS_GET_SUCCESS, 
    payload: ticketBatch }
);

export const getTicketsFailure = () => ({ type: types.TICKETS_GET_FAILURE });

export const fetchingDone = () => ({ type: types.FETCHING_DONE });

export const changeStopsFilter = (newValue) => (
  { type: types.STOPS_FILTER_CHANGE, 
    payload: newValue }
);

export const changeSortingParam = (sortingParam) => (
  { type: types.SORTING_PARAM_CHANGE, 
    payload: sortingParam }
);

export const changeNumberOfTickets = () => (
  { type: types.CHANGE_NUMBER_OF_TICKETS }
);

export const getTickets = () => async (dispatch) => {
  try {
    dispatch(getTicketsRequest());
    const params = await getSearchId();
    let done = false;
    while (!done) {
      const response = await getTicketBatchRes(params);
      const { stop, tickets: ticketBatch } = await response.json();
      const newTicketBatch = addIdsMaxStopsAndTotalDuration(ticketBatch);
      dispatch(getTicketsSuccess(newTicketBatch));
      done = stop;
    }
    dispatch(fetchingDone());
  } catch (e) {
    dispatch(getTicketsFailure());
  }
};
