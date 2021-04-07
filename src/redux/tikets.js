/* eslint-disable no-param-reassign */
const initialState = {
  tickets: [],
  cheaply: true,
  faster: false,
  stop: false,
  searchId: null,
  ticketsForView: 10,
};

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPATCH_CLICK_ON_FILTER':
      state.searchId = action.id;
      return { ...state };

    case 'HANDLE_SHOW_MORE':
      return {
        ...state,
        ticketsForView: state.ticketsForView + action.payload,
      };

    case 'GET_TICKET':
      state.tickets = [...state.tickets, ...action.tickets];
      if (action.stop) {
        state.stop = true;
      }
      return { ...state };

    case 'GET_CHEAPLY_TICKETS':
      return { ...state, cheaply: true, faster: false };

    case 'GET_FASTEST_TICKETS':
      return { ...state, faster: true, cheaply: false };

    case 'FETCHING_DON':
      return {}

    case 'TICKETS_GET_SUCCESS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default tickets;
