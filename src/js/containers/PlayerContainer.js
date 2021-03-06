import {connect} from 'react-redux'
import { fetchVoice, incrementIdx, togglePlay, changePosition, handleProgress, getUrlAndWord } from '../actions'
import Player from '../components/Player.js'
import Sound from 'react-sound'

const getAllWords = (words, idx) => {
  const unknownWords = words.filter((word, i) => i < idx)
  return unknownWords
}

const getPlayStatus = (playing) => {
  switch (playing) {
    case 0:
      return Sound.status.PLAYING
      break;
    case 1:
      return Sound.status.PAUSED
      break;
    case 2:
      return Sound.status.STOPPED
      break;
    default:
      return Sound.status.STOPPED
  }
}

const mapStateToProps = (state) => {
  return {
    activeWord: getAllWords(state.words, state.wordIdx)[state.player.activeIdx],
    activeIdx: state.player.activeIdx,
    activeUrl: state.player.audio_url,
    allWords: getAllWords(state.words, state.wordIdx),
    playStatus: getPlayStatus(state.player.playing),
    progress: state.player.progress,
    playFromPosn: state.player.playfromposn
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
    updateStatus: (nextStatus) => {
      dispatch(togglePlay(nextStatus))
    },
    forward: () => {
      dispatch(changePosition("forward"))
    },
    backward: () => {
      dispatch(changePosition("backward"))
    },
    handleProgress: (elapsed, total, position) => {
      dispatch(handleProgress(elapsed, total, position))
    },
    getUrlAndWord: (textData) => {
      dispatch (getUrlAndWord(textData))
    }

  }
}
const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerContainer
