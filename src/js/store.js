import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from "redux-logger";
import thunk from "redux-thunk";

import sleepLearn from './reducer'
import knows from './data/knows'
import words from './data/words'


// alphaFilter: filter starting letter
// knows: list of words newly marked as "known" not synced with db yet
// ideally put this in store.js
const initialState = {
  user: 0,
  wordIdx: 0,
  alphaFilter: "A",
  knows,
  words,
  api: {
    fetching: false,
    fetched: false,
    error: null
  },
  player: {
    playing: 0,
    activeIdx: 0,
    audio_url: "",
    progress: {
      elapsed:'00:00',
      total:'00:00',
      position: 0
    },
    playfromposn:0
  }
}

// ONLY CREATE 1 STORE for each application, 2nd arg = initial state, 3RD arg=enhancers
// logger: logs prev, current and action
const middleware = applyMiddleware(thunk, logger())
const store = createStore(sleepLearn, initialState, middleware)

export default store;

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
// store.dispatch(updatePage("dashboard"))
// console.log(store.getState())
//
// //unsubscribe();
// store.dispatch(toggleTodo(0))*/
