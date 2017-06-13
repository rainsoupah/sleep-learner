import axios from "axios";

export function setAlphaFilter(alphabet) {
  return { type: "SET_ALPHA_FILTER", alphabet }
}

// mutates two states (knows and words)
export function addWordTo(know, word="", i=0) {
  if (know) {
    return { type: "ADD_WORD_TO_KNOW", word , i}
  } else {
    return { type: "ADD_WORD_TO_UNKNOW" }
  }
}

// should get words based on user
export function fetchWords(user) {
  return function (dispatch) {

    dispatch({ type: "FETCH_WORDS_START" }) // dispatch action
    axios.get("/quiz/words/b")
        .then((response) => {
          dispatch({type: "FETCH_WORDS_SUCCESS", data: response.data})
        })
        .catch((err) => {
          dispatch({type:"FETCH_WORDS_FAIL", payload: err})
        })

  }
}

// const to be exported
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

// Action creators: functions that return an Action

// let counter = 0;
//
// export function addTodo(text) {
//   return { type: "ADD_TODO", text, id: counter++ }
// }
//
// export function toggleTodo(index) {
//   return { type: "TOGGLE_TODO", index}
// }
//
// export function setVisibilityFilter(filter) {
//   return { type: "SET_VISIBILITY_FILTER", filter }
// }

// call dispatch(actionCreators) to dispatch actions

// export function fetchWord(status, data, payload) {
//   switch (status) {
//     case "isFetching":
//       return { type: "FETCH_WORDS_START" }
//       break;
//     case "fail":
//       return { type: "FETCH_WORDS_FAIL", payload}
//       break;
//     case "sucess":
//       return { type: "FETCH_WORDS_SUCCESS", data}
//       break;
//     default:
//       return { type: "NONE"}
//   }
// }

// export function updatePage(page) {
//   return { type: "UPDATE_PAGE", page}
// }

// export function getNextWord() {
//   return { type: "GET_NEXT_WORD"}
// }
//
// export function getPrevWord() {
//   return { type: "GET_PREV_WORD"}
// }

// Add ASYNC actions when connecting with API
