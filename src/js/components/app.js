import React, { PropTypes } from 'react'
import Welcome from './welcome'
import Dashboard from './dashboard'
import AppContainer from '../containers/AppContainer'
import FlashCard from '../containers/FlashCard'
import PlayerSummary from './PlayerSummary'

// IMPORT CONTAINER COMPONENT (if presentational component is hooked up to it)

function AppContent(props) {
  const page = props.page;
  var content = null;

  switch (page) {
    case "welcome":
      content = <Welcome buttonClick={props.onNext}/>
      break;
    case "dashboard":
      content = <Dashboard buttonClick={props.onNext}/>
      break;
    case "card":
      content= <FlashCard buttonClick={props.onNext}/>
      break;
    case "playerSummary":
      content = <PlayerSummary unknownWords={props.unknownWords} buttonClick={props.onNext} />
      break;
    default:
      content = <div>INVALID PAGE</div>
  }

  return (
    <div>
      {content}
    </div>
  )
}

const App = ({ page, onNext, unknownWords }) => (
  <div>
    <AppContent page={page} unknownWords={unknownWords} onNext={onNext}/>
  </div>
)

App.propTypes = {
  page: PropTypes.string.isRequired,
  unknownWords: PropTypes.arrayOf(PropTypes.object).isRequired,
  onNext: PropTypes.func.isRequired
}

export default App
