import { connect } from 'react-redux'
import { fetchWords } from '../actions'
import Welcome from '../components/welcome'

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

// const mapStateToProps = (state) => {
//   return {
//     words: state.words
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getWords: (user) => {
      dispatch(fetchWords(user))
    }
  }
}

const WelcomeContainer = connect(
  null,
  mapDispatchToProps
)(Welcome)

export default WelcomeContainer
