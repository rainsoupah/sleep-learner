import React, { PropTypes } from 'react'
import { signIn } from '../actions'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const LogIn = ({signIn}) => (
  <FlatButton>
    <a href='/authorize/facebook'> Login </a>
  </FlatButton>
)

//add onClick event
const LogOut = ({props, activeUser}) => (
  <div>
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
    >
      <MenuItem primaryText="Start Quiz" />
      <MenuItem primaryText="Sign out" href='/logout'/>
    </IconMenu>

    <div> { activeUser } </div>
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
      <AppBar title="Sleep Learn SAT"
              iconElementLeft={this.props.isLoggedIn? <LogOut activeUser={this.props.activeUser}/> : <LogIn />}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    activeUser: state.user.username,
    title: state.appBar.title
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
