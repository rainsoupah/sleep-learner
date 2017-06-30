import React, { PropTypes } from 'react'
import { signIn } from '../actions'
import {connect} from 'react-redux'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const styles={
  headerContainer: {
    borderBottomStyle: 'dotted',
    borderBottomRightRadius: '30px',
    borderBottomWidth: '2px',
    borderBottomColor: '#b0b0bf',
    backgroundColor: 'white',
    boxShadow: 'none',
    fontFamily: 'Patrick Hand Sc, Regular',
  },
  headerTitle: {
    fontSize: '16px',
    fontColor: '#374758',
    textAlign: 'right',
    paddingTop: '19px',
  }
}

const LogIn = ({props}) => (
  <FlatButton
    label="Login" href='/authorize/facebook'/>
)

//add onClick event
const LogOut = ({props, activeUser}) => (
  <div>
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
    >
      <MenuItem primaryText="Start Quiz" href='/quiz'/>
      <MenuItem primaryText="Sign out" href='/logout'/>
    </IconMenu>
  </div>
)

class AppHeaderPres extends React.Component {

  componentWillMount() {
    console.log("componentWillMount in appheader.js")
    // const _this = this
    // this.props.signIn()
    this.props._signIn()
  }

  // displayUser() {
  //   var message = "Hi "+ this.props.activeUser
  //   this.setState({
  //     header: message
  //   })
  // }
  // title={this.props.isLoggedIn? this.props.activeUser : "Sleep Learn SAT"}
  // titleStyle={styles.headerTitle}

  render() {
    return(
      <AppBar style={styles.headerContainer}
        iconElementLeft={this.props.isLoggedIn? <LogOut activeUser={this.props.activeUser}/>: <LogIn/>}
      >
        <span style={styles.headerTitle}>
          {this.props.isLoggedIn && "Hi " + this.props.activeUser}
          {!this.props.isLoggedIn && "Sleep Learn SAT"}
        </span>
      </AppBar>
    )
  }
}

// {
//   this.props.isLoggedIn &&
//   Hi {this.props.activeUser}
//
// }
// {
//   !this.props.isLoggedIn &&
//   Welcome to Sleep Learn SAT
// }
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
