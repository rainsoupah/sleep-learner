// import { VisibilityFilters } from './actions'
import {combineReducers} from 'redux'
// import { audioReducer as audio } from 'redux-audio'

// REDUCERS

// handle edge cases

function user(state, action) {
  return 0
}

function player(state={}, action) {
  switch (action.type) {
    case "FETCH_VOICE_SUCCESS":
      return {...state, audio_url: action.payload}
      break;
    case "INCREMENT_PLAYER_INDEX" :
      return {...state, activeIdx: state.activeIdx+1}
    case "TOGGLE_PLAY_PAUSE":
      return {...state, playing: action.nextStatus}
    default:
      return state
  }
}

function wordIdx(state=0, action) {
  switch (action.type) {
    case "ADD_WORD_TO_UNKNOW":
      return state + 1
      break;
    default:
      return state
  }
}

function alphaFilter(state="A", action) {
  switch (action.type) {
    case "SET_ALPHA_FILTER":
      return action.alphabet
      break;
    default:
      return state
  }
}

function knows(state=[], action) {
  switch (action.type) {
    case "ADD_WORD_TO_KNOW":
      return [...state, action.id]
      break;
    default:
      return state
  }
}

function words(state=[], action) {
  switch (action.type) {
    case "ADD_WORD_TO_KNOW":
      // remove word from
      return [ ...state.slice(0, action.sliceIdx), ...state.slice(action.sliceIdx + 1) ]
      break;
    case "FETCH_WORDS_SUCCESS":
      return action.payload
      break;
    default:
      return state
  }
}

function api(state={}, action) {
  switch(action.type) {
    case "FETCH_WORDS_START":
      return { ...state, fetching: true, };
      break;
    case "FETCH_WORDS_FAIL":
      return { ...state, fetching: false, error: action.payload, };
      break;
    case "FETCH_WORDS_SUCCESS":
      return { ...state, fetching: false, fetched: true, };
      break;
    default:
      return state;
  }
}

// COMBINE REDUCERS
const sleepLearn = combineReducers(
  {
    user,
    wordIdx,
    alphaFilter,
    knows,
    words,
    api,
    player
  }
)

export default sleepLearn;

// Reducer takes in an action and makes changes to the state
// NOTE REDUCER MUST BE purely functional, no mutation/side-effects
// first define initialState
// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: []
// }
// immutability:
// it's a good idea to use a helper like react-addons-update, updeep,
// or even a library like Immutable that has native support for deep updates

// reducers must be named the same as states
// function visibilityFilter(state=VisibilityFilters.SHOW_ALL, action) {
//   switch (action.type) {
//     case "SET_VISIBILITY_FILTER":
//       return action.filter
//       break;
//     default:
//       return state
//   }
// }
// function todos(state=[], action) {
//     switch (action.type) {
//       case "ADD_TODO":
//         return [
//           ...state,
//           {
//             id: action.sliceIdxd,
//             text: action.text,
//             completed: false
//           }
//         ]
//         break;
//       case "TOGGLE_TODO":
//         return state.map((atodo) => {
//           if (atodo.id === action.index) {
//             return {
//               ...atodo, completed: !atodo.completed
//             }
//           }
//           return atodo
//         })
//         break;
//       default:
//         return state
//     }
// }

// todoApp is the root reducer

// function page(state="welcome", action) {
//   switch (action.type) {
//     case "UPDATE_PAGE":
//       return action.page
//       break;
//     default:
//       return state
//   }
// }
