/* eslint-disable no-await-in-loop */
import { addIdsMaxStopsAndTotalDuration } from '../utils';
import { getTicketBatchRes, getSearchId } from '../fetch';

export const TICKETS_GET_REQUEST = 'TICKETS_GET_REQUEST';
export const TICKETS_GET_SUCCESS = 'TICKETS_GET_SUCCESS';
export const TICKETS_GET_FAILURE = 'TICKETS_GET_FAILURE';
export const FETCHING_DONE = 'FETCHING_DONE';
export const STOPS_FILTER_CHANGE = 'STOPS_FILTER_CHANGE';
export const SORTING_PARAM_CHANGE = 'SORTING_PARAM_CHANGE';
export const CHANGE_NUMBER_OF_TICKETS = 'CHANGE_NUMBER_OF_TICKETS';

export const getTicketsRequest = () => ({ type: TICKETS_GET_REQUEST });

export const getTicketsSuccess = (ticketBatch) => (
  { type: TICKETS_GET_SUCCESS, payload: ticketBatch }
);

export const getTicketsFailure = () => ({ type: TICKETS_GET_FAILURE });

export const fetchingDone = () => ({ type: FETCHING_DONE });

export const changeStopsFilter = (newValue) => (
  { type: STOPS_FILTER_CHANGE, payload: newValue }
);

export const changeSortingParam = (sortingParam) => (
  { type: SORTING_PARAM_CHANGE, payload: sortingParam }
);

export const changeNumberOfTickets = () => (
  { type: CHANGE_NUMBER_OF_TICKETS }
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
