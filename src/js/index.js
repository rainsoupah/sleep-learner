import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import sleepLearn from './reducer'
import store from './store'
import AppContainer from './containers/AppContainer' //capitalize name of files

// Log the initial state
// console.log(store.getState())
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
//
// store.dispatch(addTodo('Learn about actions'))
// // array indexing applies (0 is the first element)
// store.dispatch(toggleTodo(0))
//
// //unsubscribe();
// store.dispatch(toggleTodo(0))*/

// final result
render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
)
