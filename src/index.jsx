import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App/App';
import reducers from './redux/reducers';

const initialState = {
  tickets: [],
  filters: {
    stops: null,
  },
  cheaply: true,
  faster: false,
  fetchingState: 'false',
  numberOfTickets: 5,
  isError: false,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
