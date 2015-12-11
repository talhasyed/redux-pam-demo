import React from 'react';
import { render } from 'react-dom';
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';
import App from './containers/App';
import reducers from './reducers';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

// console.log("reducer is")
// console.log(reactReduxPamApp)
// console.log("reducer is")

const finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)


const store = finalCreateStore(reducer);
const history = createBrowserHistory()

syncReduxAndRouter(history, store)

const rootElement = document.getElementById('root')

render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor}/>
    </DebugPanel>
  </div>,
  rootElement
);
