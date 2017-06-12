import { connect } from 'react-redux'
import { addWordTo } from '../actions'
import Card from '../components/card'

// getWords
// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }

const getVocab = (words, idx) => {
  return words[idx]
}

const mapStateToProps = (state) => {
  return {
    activeWord: getVocab(state.words, state.wordIdx),
    activeIdx: state.wordIdx
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextClick: (know, word="", i=0) => {
      dispatch(addWordTo(know, word, i))
    }
  }
}

const FlashCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default FlashCard
