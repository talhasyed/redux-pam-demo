import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reactReduxPamApp from './reducers';
import { devTools, persistState } from 'redux-devtools';

const finalCreateStore = compose(
  // applyMiddleware(m1, m2, m3), // any Redux middleware, e.g. redux-thunk
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(reactReduxPamApp);

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    {<App store={store} />}
  </Provider>,
  rootElement
);
