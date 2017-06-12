import React, {PropTypes} from 'react'
import Dashboard from './dashboard'
import { Link } from 'react-router'

// to pass functions: must add {} around prop

const Welcome = () => (
  <div>
    Welcome to Sleep Learner: loggin here
    <button>
      <Link to="/dashboard">
        Loggin
      </Link>
    </button>
  </div>
)

// Welcome.propTypes = {
//   buttonClick: PropTypes.func.isRequired
// }

export default Welcome
