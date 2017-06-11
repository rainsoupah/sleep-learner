import React, { PropTypes } from 'react'
import Welcome from './welcome'
import Dashboard from './dashboard'
import AppContainer from '../containers/AppContainer'
import FlashCard from '../containers/FlashCard'

// IMPORT CONTAINER COMPONENT (if presentational component is hooked up to it)

function AppContent(props) {
  const page = props.page;
  var content = null;
  if (page === "welcome") {
    content = <Welcome buttonClick={props.onNext}/>
  } else if (page === "dashboard") {
    content = <Dashboard buttonClick={props.onNext}/>
  } else if (page === "card") {
    content= <FlashCard/>
  } else {
    console.log(page);
  }
  return (
    <div>
      {content}
    </div>
  )
}

const App = ({ page, onNext }) => (
  <div>
    <AppContent page={page} onNext={onNext}/>
  </div>
)

App.propTypes = {
  page: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired
}

export default App
