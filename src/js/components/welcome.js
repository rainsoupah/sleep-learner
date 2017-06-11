import React, {PropTypes} from 'react'
import Dashboard from './dashboard'

// to pass functions: must add {} around prop

const Welcome = ({buttonClick}) => (
  <div>
    Welcome to Sleep Learner: loggin here
    <button onClick={() => buttonClick("dashboard")}>
      To Dashboard
    </button>
  </div>
)

Welcome.propTypes = {
  buttonClick: PropTypes.func.isRequired
}

export default Welcome
