/*
  STARTER FILE Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import 'babel-polyfill';
import App from './components/App';
import LoadButton from './components/LoadButton'
import store, { history } from './store';

render(
  // This structure is the router
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        // If route is "/", go to IndexRoute
        <IndexRoute component={LoadButton} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root') // insert button
);

