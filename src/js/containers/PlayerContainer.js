import {connect} from 'react-redux'
import { fetchVoice, incrementIdx } from '../actions'
import Player from '../components/Player.js'

const getAllWords = (words, idx) => {
  const unknownWords = words.filter((word, i) => i < idx)
  return unknownWords
}

const mapStateToProps = (state) => {
  return {
    activeWord: getAllWords(state.words, state.wordIdx)[state.player.activeIdx],
    activeIdx: state.player.activeIdx,
    activeUrl: state.player.audio_url,
    allWords: getAllWords(state.words, state.wordIdx)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUrl: (textData) => {
      dispatch(fetchVoice(textData))
    },
    getNextWord: (activeIdx) => {
      dispatch(incrementIdx(activeIdx))
    }
  }
}
const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerContainer
