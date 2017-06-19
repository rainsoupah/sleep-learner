import {connect} from 'react-redux'
import { fetchVoice } from '../actions'
import Player from '../components/Player.js'

const getActiveWord = (words, idx, playerIdx) => {
  const unknownWords = words.filter((word, i) => i < idx)
  console.log(unknownWords[0]);
  return unknownWords[playerIdx]
}

// const playSound = (textData) => {
//   dispatch(fetchVoice(textData));
//   var sound = new Audio(audio_url)
//   sound.addEventListener('loadedmetadata', function(){
//     sound.play()
//   })
// }

const mapStateToProps = (state) => {
  return {
    activeWord: getActiveWord(state.words, state.wordIdx, state.player.activeIdx),
    activeIdx: state.player.activeIdx,
    activeUrl: state.player.audio_url
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUrl: (textData) => {
      dispatch(fetchVoice(textData))
    }
  }
}
const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerContainer
