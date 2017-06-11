import { connect } from 'react-redux'
import { addWordToKnow } from '../actions'
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

const mapStateToProps = (state) => {
  return {
    activeLetter: state.alphaFilter,
    wordsKnown: state.knows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onKnowClick: (id) => {
      dispatch(addWordToKnow(id))
    }
  }
}

const FlashCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default FlashCard
