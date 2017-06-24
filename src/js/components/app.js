import React, { PropTypes } from 'react'
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux'

// import AppContainer from './containers/AppContainer' // DO NOT DELETE capitalize name of container files!!!!

import WelcomeContainer from '../containers/WelcomeContainer'
import Dashboard from './dashboard'
import FlashCard from '../containers/FlashCard'
import PlayerSummary from './PlayerSummary'
import PlayerContainer from '../containers/PlayerContainer'
import AppBar from 'material-ui/AppBar'

// import AppContainer from '../containers/AppContainer'


// IMPORT CONTAINER COMPONENT (if presentational component is hooked up to it)
// Notes:
//  To pass props to react router: <Route path="/" component={App} appName="test app">, then this.props.route.appName
const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <AppBar title="Sleep Learner"/>
      <Router history={browserHistory}>
          <Route path="/" component={WelcomeContainer}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/quiz" component={FlashCard}/>
          <Route path="/playerSummary" component={PlayerSummary}/>
          <Route path="/player" component={PlayerContainer}/>
      </Router>
    </div>

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
