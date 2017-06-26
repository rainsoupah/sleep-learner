import React, { PropTypes } from 'react'
import { signIn } from '../actions'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const LogIn = ({signIn}) => (
  <FlatButton>
    <a href='/authorize/facebook'> Login </a>
  </FlatButton>
)

//add onClick event
const LogOut = ({activeUser}) => (
  <div>
    <div> { activeUser } </div>
    <FlatButton>
      <a href='/logout'> Logout </a>
    </FlatButton>
  </div>
)

class AppHeaderPres extends React.Component {
  componentWillMount() {
    console.log("componentWillMount in appheader.js")
    // const _this = this
    // this.props.signIn()
    this.props._signIn()
  }
  render() {
    return(
      <AppBar title="SleepLearner"
              iconElementRight={this.props.isLoggedIn? <LogOut activeUser={this.props.activeUser}/> : <LogIn />}
              iconElementLeft={null}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    activeUser: state.user.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _signIn: () => {
      dispatch(signIn())
    }
  }
}

const AppHeader = connect(
  mapStateToProps,
  mapDispatchToProps
  // null
)(AppHeaderPres)

export default AppHeader
