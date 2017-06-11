import React, {PropTypes} from 'react'

const Dashboard = ({buttonClick}) => (
  <div>
    My Dahsboard Component
    <button onClick={() => buttonClick("card")}>
      To FlashCard
    </button>
  </div>
)

Dashboard.propTypes = {
  buttonClick: PropTypes.func.isRequired
}

export default Dashboard
