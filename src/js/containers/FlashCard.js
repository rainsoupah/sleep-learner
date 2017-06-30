import { connect } from 'react-redux'
import { addWordTo, replyWords, signInAndGetWords} from '../actions'
import CardPres from '../components/card'

const getVocab = (words, idx) => {
  return words[idx]
}

const mapStateToProps = (state) => {
  return {
    activeWord: getVocab(state.words, state.wordIdx),
    activeIdx: state.wordIdx,
    knownWords: state.knows,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextClick: (know, id=0, i=0) => {
      dispatch(addWordTo(know, id, i))
    },
    onSummarize: (user, knownWords) => {
      dispatch(replyWords(user, knownWords))
    },
    _initData: () => {
      dispatch(signInAndGetWords())
    }
  }
}

const FlashCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardPres)

export default FlashCard
