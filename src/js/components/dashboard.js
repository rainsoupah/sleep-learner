import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import { signInAndGetWords } from '../actions'
import {connect} from 'react-redux'

class DashboardPres extends React.Component{
  componentWillMount() {
    console.log("componentWillMount")
    // const _this = this
    // this.props.signIn()
    this.props._initData()
  }

  // componentDidMount() {
  //   console.log("componentDidMount: %s", this.props.currentUser.userid )
  //   this.props.fetchWords(this.props.currentUser.userid)
  // }
  render() {
    return(
        <div>
          <div> My Dashboard Component, with user {this.props.currentUser.userid}</div>
          <button> <Link to="/quiz"> Enter quiz mode</Link></button>
        </div>
    )
  }
}

// <button onClick={()=>this.props.signIn()}>signIn button</button>
const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _initData: () => {
      dispatch(signInAndGetWords())
    }
  }
}

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPres)

export default Dashboard
