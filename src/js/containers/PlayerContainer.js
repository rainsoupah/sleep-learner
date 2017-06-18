import {connect} from 'react-redux'
// import { } from '../actions'
import Player from '../components/Player.js'

const getActiveWord = (words, idx, playerIdx) => {
  const unknownWords = words.filter((word, i) => i < idx)
  console.log(unknownWords[0]);
  return unknownWords[playerIdx]
}

const mapStateToProps = (state) => {
  return {
    activeWord: getActiveWord(state.words, state.wordIdx, state.player.activeIdx),
    activeIdx: state.player.activeIdx
  }
}

const PlayerContainer = connect(
  mapStateToProps,
  null
)(Player)

export default PlayerContainer
