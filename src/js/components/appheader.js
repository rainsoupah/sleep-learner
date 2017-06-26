import React, { PropTypes } from 'react'
import { signIn, signOut } from '../actions'
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

const AppHeaderPres = ( {isLoggedIn, activeUser} ) => (
  <AppBar title="SleepLearner" iconElementRight={isLoggedIn? <LogOut activeUser={activeUser}/> : <LogIn />}/>
)

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    activeUser: state.user.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onSignIn: () => {
    //   dispatch(signIn())
    // },
    onSignOut: () => {
      dispatch(signOut())
    }
  }
}

const AppHeader = connect(
  mapStateToProps,
  mapDispatchToProps
  // null
)(AppHeaderPres)

export default AppHeader
