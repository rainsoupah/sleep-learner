// import { VisibilityFilters } from './actions'
import {combineReducers} from 'redux'

// REDUCERS
function page(state="welcome", action) {
  switch (action.type) {
    case "UPDATE_PAGE":
      return action.page
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
      return [...state, action.word]
      break;
    default:
      return state
  }
}

// COMBINE REDUCERS
const sleepLearn = combineReducers(
  {
    page,
    alphaFilter,
    knows
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
//             id: action.id,
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
