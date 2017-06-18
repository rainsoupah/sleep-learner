import React, {PropTypes} from 'react'

// to pass functions: must add {} around prop

const Player = ({activeWord, activeIdx}) => (
  <div>
    {activeWord.word} , {activeWord.defin}, {activeIdx}
  </div>
)

Player.propTypes = {
  activeWord: PropTypes.object.isRequired,
  activeIdx: PropTypes.number.isRequired
}

export default Player
