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

export function setAlphaFilter(alphabet) {
  return { type: "SET_ALPHA_FILTER", alphabet }
}

// mutates two states (knows and words)
export function addWordToKnow(word, i) {
  return { type: "ADD_WORD_TO_KNOW", word , i}
}

export function updatePage(page) {
  return { type: "UPDATE_PAGE", page}
}

// export function getNextWord() {
//   return { type: "GET_NEXT_WORD"}
// }
//
// export function getPrevWord() {
//   return { type: "GET_PREV_WORD"}
// }




// Add ASYNC actions when connecting with API
