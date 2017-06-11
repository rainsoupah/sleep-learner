import {connect} from 'react-redux'
import App from '../components/app'
import { updatePage } from '../actions'

const mapStateToProps = (state) => {
  return {
    page: state.page
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
)(App);

export default AppContainer
