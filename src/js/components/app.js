import React, { PropTypes } from 'react'
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux'

// import AppContainer from './containers/AppContainer' // DO NOT DELETE capitalize name of container files!!!!

import Welcome from './welcome'
import Dashboard from './dashboard'
import FlashCard from '../containers/FlashCard'
import PlayerSummary from './PlayerSummary'
import Player from './Player'

// import AppContainer from '../containers/AppContainer'


// IMPORT CONTAINER COMPONENT (if presentational component is hooked up to it)

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Welcome}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/quiz" component={FlashCard}/>
        <Route path="/playerSummary" component={PlayerSummary}/>
        <Route path="/player" component={Player}/>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App

// page: PropTypes.string.isRequired,
// unknownWords: PropTypes.arrayOf(PropTypes.object).isRequired,
// onNext: PropTypes.func.isRequired

// function AppContent(props) {
//   const page = props.page;
//   var content = null;
//
//   switch (page) {
//     case "welcome":
//       content = <Welcome buttonClick={props.onNext}/>
//       break;
//     case "dashboard":
//       content = <Dashboard buttonClick={props.onNext}/>
//       break;
//     case "card":
//       content= <FlashCard buttonClick={props.onNext}/>
//       break;
//     case "playerSummary":
//       content = <PlayerSummary unknownWords={props.unknownWords} buttonClick={props.onNext} />
//       break;
//     default:
//       content = <div>INVALID PAGE</div>
//   }
//
//   return (
//     <div>
//       {content}
//     </div>
//   )
// }

// <AppContent page={page} unknownWords={unknownWords} onNext={onNext}/>
