import React, {PropTypes} from 'react'
// import Dashboard from './dashboard'
import { Link } from 'react-router'

// to pass functions: must add {} around prop

const Welcome = ({getWords}) => (
  <div>
    Welcome to Sleep Learner: loggin here
    <ul> To Dos
      <li> Implement a timer while "quiz" is running </li>
      <li> loggin form (optional oauth) </li>
      <li> connect with player, reading definitions</li>
      <li> issue with react router conflicts flask: see catch-all routing</li>
      <li> UI: display stats dashboard</li>
      <li> Play and pause, toggle position like mp3 player</li>
    </ul>

    <ul> Optional
      <li> </li>
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
