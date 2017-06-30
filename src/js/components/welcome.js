import React, {PropTypes} from 'react'
// import Dashboard from './dashboard'
import { Link } from 'react-router'
// import './welcome.css'


// to pass functions: must add {} around prop



const Welcome = () => (

  <div className="welcome-container">

      <div className="welcome-row">
          <div className="col-lg-12">
              <div className="welcome-message">
                  <h1>S A T</h1>
                  <h3>Made Easy</h3>
                  <hr className="welcome-divider"></hr>
                  <ul className="list-inline">
                      <li>photo1</li>
                      <li>photo2</li>
                      <li>photo3</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>

)

// <Link to="/dashboard" onClick={() => getWords("userId")}>
//   Loggin
// </Link>
// Welcome.propTypes = {
//   getWords: PropTypes.func.isRequired
// }

export default Welcome
