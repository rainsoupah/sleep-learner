// import { combineReducers, createStore, applyMiddleware } from "redux";
// import axios from "axios";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
//
// //initial state
// const initialState = {
//   fetching: false,
//   fetched: false,
//   users:[],
//   error: null,
// }
// // redux middleware (async actions, organize actions in stores)
// // function (AReducer should be in separate file)
//
// // reducer takes in an action, and changes the state
// /*const AReducer = (state={}, action) => {
//   switch(action.type) {
//     case "ACTION_1A": {
//       // ALWAYS copy state into new state and return new state
//       // DO NOT mutate state
//       state = {...state, A_field1: "action1 stuff", A_field2: action.payload}
//       break;
//     }
//     case "ACTION_2A": {
//       state = {...state, A_field1: "action2 stuff", A_field2: action.payload}
//       break;
//     }
//     case "E": {
//       throw new Error("Reducer action ERROR");
//     }
//   }
//   return state;
// };*/
//
// // BReducer should be in separate file
// const BReducer = (state=initialState, action) => {
//   switch(action.type) {
//     case "FETCH_USERS_START": {
//       return {...state, fetching: true,};
//       break;
//     }
//     case "FETCH_USERS_FAIL": {
//       return {...state, fetching: false, error: action.payload,};
//       break;
//     }
//     case "FETCH_USERS_SUCCESS": {
//       return {...state, fetching: true, fetched: true, users: action.payload,};
//       break;
//     }
//   }
//   return state;
// };
//
// // combine two reducers
// const reducers = combineReducers({
//   B: BReducer,
// })
//
// /*
// // middleware: intercept actions
// // syntax: (store)=>(next)=>(action)=>{}
// // 1. LOGGER
// const logger = (store)=>(next)=>(action)=>{
//   console.log("my action: ", action);
//   // perform action_2A, note payload will not change and the above console log will still show action_1A
//   //action.type = "ACTION_2A";
//   // if we stop here, no action will be dispatched (subscribe/dispatch will not be ran)
//   // run reducer
//   try {
//       next(action);
//   } catch (e) {
//     console.log("my logger caught an error :) ", e);
//   }
//
// }
//
// // 2. ERROR middleware, deprecated been incorporated in logger
// /*const error = (store)=>(next)=>(action)=> {
//   try {
//     next(action);
//   } catch (e) {
//     console.log("middleware caught error: ", e);
//   }
// }*/
//
// const middleware = applyMiddleware(thunk, logger());
//
// // createStore takes a reducer function and initial state (normally an object)
// // initial states are stated in the reducer state={}
// // add middleware
// const store = createStore(reducers, middleware);
//
// // takes a lambda function, store.getState gets the current state
// // displays the state
// store.subscribe(() => {
//     console.log("store changed", store.getState());
// })
//
// // dispatch an action, must have type, value can be named to other things (usually called payload)
// //store.dispatch({type: "ACTION_1A", payload: "id = 1"})
// //store.dispatch({type: "ACTION_2A", payload: "id = 2"})
// //store.dispatch({type: "E", payload: "id = error"})
//
// // more complex dispatches
// store.dispatch((dispatch) => {
//   dispatch({type: "FETCH_USERS_START"})
//   axios.get ("http://rest.learncode.academy/api/wstern/users")
//       .then((response) => {
//         dispatch({type: "FETCH_USERS_SUCCESS", payload: response.data})
//       })
//       .catch((err) => {
//         dispatch({type:"FETCH_USERS_FAIL", payload: err})
//       })
// })
