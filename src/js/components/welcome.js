import React, {PropTypes} from 'react'
// import Dashboard from './dashboard'
import { Link } from 'react-router'

// to pass functions: must add {} around prop

const Welcome = ({getWords}) => (
  <div>
    Welcome to Sleep Learner: loggin here
    <ul> To Dos
      <li> Connect with Python + database backend</li>
      <li> Implement a timer while "quiz" is running </li>
      <li> Use async actions to get/post data, display progress bar while fetching voices</li>
      <li> user can select decks before "quiz": ex (A,B,C,D...), (word type: noun vs verb vs adj)</li>
      <li> loggin with oauth </li>
    </ul>

    <button>
      <Link to="/dashboard" onClick={() => getWords("userId")}>
        Loggin
      </Link>
    </button>
  </div>
)

Welcome.propTypes = {
  getWords: PropTypes.func.isRequired
}

export default Welcome
