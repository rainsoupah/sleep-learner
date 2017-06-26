import { connect } from 'react-redux'
import { addWordTo, replyWords } from '../actions'
import CardPres from '../components/card'

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
    activeIdx: state.wordIdx,
    knownWords: state.knows,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextClick: (know, id=0, i=0) => {
      dispatch(addWordTo(know, id, i))
    },
    onSummarize: (user, knownWords) => {
      dispatch(replyWords(user, knownWords))
    }
  }
}

const FlashCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardPres)

export default FlashCard
