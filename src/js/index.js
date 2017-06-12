import React from 'react'
import { render } from 'react-dom'
import store from './store'
import App from './components/app.js'

render(
  <App store={store}/> ,
  document.getElementById('app')
)

// import { createStore } from 'redux'
// import sleepLearn from './reducer'
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
