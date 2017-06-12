import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
// import relevant actions if passing actions as props


// to pass functions: must add {} around prop

/******PRESENTATIONAL COMPONENT*****************/
const PlayerSummaryPres = ({unknownWords}) => (
  <div>
    List of words marked as unknownWords, caching problem: each time refresh page, states are lost
    <ul>
      {unknownWords.map((wordSet, i) => (
        <li key={i}> {wordSet.word} , {wordSet.defin}</li>
      ))}
    </ul>
    <button> <Link to="/player"> Enter player mode</Link></button>
  </div>
)

PlayerSummaryPres.propTypes = {
  unknownWords: PropTypes.arrayOf(PropTypes.object).isRequired
}

/******CONTAINER COMPONENT*****************/
const getUnknownWords = (words, idx) => {
  return words.filter((word, i) => i < idx)
}

const mapStateToProps = (state) => {
  return { unknownWords: getUnknownWords(state.words, state.wordIdx)}
}

const PlayerSummary = connect(
  mapStateToProps,
  null
)(PlayerSummaryPres)

// Note: export container component
export default PlayerSummary
