import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import { signIn, fetchWords } from '../actions'
import {connect} from 'react-redux'

class DashboardPres extends React.Component{
  componentWillMount() {
    console.log("calling signIn function")
    const _this = this
    _this.props.signIn()
    setTimeout(_this.props.fetchWords(1),1000)
  }

  render() {
    return(
        <div>
          <div> My Dashboard Component, with user {this.props.activeUser}</div>
          <button> <Link to="/quiz"> Enter quiz mode</Link></button>
        </div>
    )
  }
}

// <button onClick={()=>this.props.signIn()}>signIn button</button>
const mapStateToProps = (state) => {
  return {
    activeUser: state.user.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => {
      dispatch(signIn())
    },
    fetchWords: (activeUser) => {
      dispatch(fetchWords(activeUser))
    }
  }
}

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPres)
// const Dashboard = () => (
//   <div>
//     My Dahsboard Component
//     <button> <Link to="/quiz"> Enter quiz mode</Link></button>
//   </div>
// )

// Dashboard.propTypes = {
//   buttonClick: PropTypes.func.isRequired
// }

export default Dashboard
