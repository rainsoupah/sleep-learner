import axios from "axios";

export function setAlphaFilter(alphabet) {
  return { type: "SET_ALPHA_FILTER", alphabet }
}

// mutates two states (knows and words)
export function addWordTo(know, id, sliceIdx) {
  if (know) {
    return { type: "ADD_WORD_TO_KNOW", id, sliceIdx }
  } else {
    return { type: "ADD_WORD_TO_UNKNOW" }
  }
}

export function incrementIdx() {
  return { type: "INCREMENT_PLAYER_INDEX" }
}

// should get words based on user
export function fetchWords(user) {
  return function (dispatch) {

    dispatch({ type: "FETCH_WORDS_START" }) // dispatch action
    return axios.get("/api/words/c")
        .then((response) => {
          // console.log(response)
          dispatch({type: "FETCH_WORDS_SUCCESS", payload: response.data.results})
        })
        .catch((err) => {
          dispatch({type:"FETCH_WORDS_FAIL", payload: err})
        })
  }
}

export function fetchVoice(textData) {
  return function (dispatch) {

    dispatch({ type: "FETCH_VOICE_START" }) // dispatch action
    return axios.get('/player/tts', {
      params: {
        text: textData,
      }
    })
    .then((response) => {
      dispatch({type: "FETCH_VOICE_SUCCESS", payload: response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export function replyWords(user, knownWords) {
  return function (dispatch) {
    axios.post('/api/reply', {
    user,
    knownWords
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}


// post to database

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
