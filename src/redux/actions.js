/* eslint-disable no-await-in-loop */

import { addIdsMaxStopsAndTotalDuration } from '../utils';
import { getTicketBatchRes, getSearchId } from '../fetch';
import * as types from './types';

export const getTicketsRequest = () => ({ type: types.TICKETS_GET_REQUEST });

export const getTicketsSuccess = (ticketBatch) => ({ type: types.TICKETS_GET_SUCCESS,   payload: ticketBatch });

export const getTicketsFailure = () => ({ type: types.TICKETS_GET_FAILURE });

export const fetchingDone = () => ({ type: types.FETCHING_DONE });

export const handleShowMore = (e) => ({ type: types.HANDLE_SHOW_MORE, e });

export const dispatchClickOnFilter = (transfer) => ({ type: types.DISPATCH_CLICK_ON_FILTER, transfer });

export const getCheaplyTickets = () => ({ type: types.GET_CHEAPLY_TICKETS });

export const getFastestTickets = () => ({ type: types.GET_FASTEST_TICKETS });


export const getTicket = (tickets, stop) => ({ type: types.GET_TICKET, tickets, stop });

export function getId() {
  return (dispatch) => {
    getSearchId().then((id) => dispatch(getSearchId(id)));
  };
}

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
