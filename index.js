import React from 'react';
import { Provider } from 'react-redux';
import reactReduxPamApp from './reducers';
import App from './containers/App';

React.render(
  <Provider store={reactReduxPamApp}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
