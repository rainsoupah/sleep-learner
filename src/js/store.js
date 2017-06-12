import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import sleepLearn from './reducer'
import knows from './data/knows'
import words from './data/words'


// alphaFilter: filter starting letter
// knows: list of words newly marked as "known" not synced with db yet
// ideally put this in store.js
const initialState = {
  wordIdx: 0,
  page: "welcome",
  alphaFilter: "A",
  knows,
  words,
}

// ONLY CREATE 1 STORE for each application, 2nd arg = initial state, 3RD arg=enhancers (brb)
const store = createStore(sleepLearn, initialState)
export default store;

// Log the initial state
// console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
//
// store.dispatch(addTodo('Learn about actions'))
// // array indexing applies (0 is the first element)
// store.dispatch(updatePage("dashboard"))
// console.log(store.getState())
//
// //unsubscribe();
// store.dispatch(toggleTodo(0))*/
