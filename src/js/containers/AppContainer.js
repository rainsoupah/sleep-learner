import {connect} from 'react-redux'
import App from '../components/app'
import { updatePage } from '../actions'

const getUnknownWords = (words, idx) => {
  return words.filter((word, i) => i < idx)
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
    unknownWords: getUnknownWords(state.words, state.wordIdx)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNext: (id) => {
      dispatch(updatePage(id))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
