import {connect} from 'react-redux'
import { fetchVoice, incrementIdx, togglePlay } from '../actions'
import Player from '../components/Player.js'
import Sound from 'react-sound'

const getAllWords = (words, idx) => {
  const unknownWords = words.filter((word, i) => i < idx)
  return unknownWords
}

const mapStateToProps = (state) => {
  return {
    activeWord: getAllWords(state.words, state.wordIdx)[state.player.activeIdx],
    activeIdx: state.player.activeIdx,
    activeUrl: state.player.audio_url,
    allWords: getAllWords(state.words, state.wordIdx),
    playStatus: state.player.playing ? Sound.status.PAUSED: Sound.status.PLAYING
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNextUrl: (textData) => {
      dispatch(fetchVoice(textData))
    },
    getNextWord: () => {
      dispatch(incrementIdx())
    },
    updateStatus: () => {
      dispatch(togglePlay())
    },
  }
}
const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerContainer
