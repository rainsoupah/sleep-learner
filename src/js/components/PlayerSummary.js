import React, {PropTypes} from 'react'
import Player from './Player'

// to pass functions: must add {} around prop

const PlayerSummary = ({unknownWords, buttonClick}) => (
  <div>
    <ul>
      {unknownWords.map((wordSet, i) => (
        <li key={i}> {wordSet.word} , {wordSet.defin}</li>
      ))}
    </ul>
    <button onClick={() => buttonClick("player")}>
      To Sleep learner Player
    </button>
  </div>
)

PlayerSummary.propTypes = {
  unknownWords: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonClick: PropTypes.func.isRequired
}

export default PlayerSummary
