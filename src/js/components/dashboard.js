import React, {PropTypes} from 'react'
import { Link } from 'react-router'

const Dashboard = ({buttonClick}) => (
  <div>
    My Dahsboard Component
    <button> <Link to="/quiz"> Enter quiz mode</Link></button>
  </div>
)

// Dashboard.propTypes = {
//   buttonClick: PropTypes.func.isRequired
// }

export default Dashboard
