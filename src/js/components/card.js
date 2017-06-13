import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';

// when using spread operator (line 9) passes copy of todo
// takes two props
const Card = ({ activeWord, activeIdx, knownWords, user, onNextClick, onSummarize }) => (
  <div>
    <div> {activeWord.word} </div>
    <div> {activeWord.defin} </div>
    <button onClick={() => onNextClick(true, activeWord.idx, activeIdx)}> I Know </button>
    <button onClick={() => onNextClick(false)}> I dont Know </button>

    <button onClick={() => onSummarize(user, knownWords)}>
      <Link to="/playerSummary"> Enough, player summary</Link>
    </button>

  </div>
)

Card.propTypes = {
  activeWord: PropTypes.object.isRequired,
  knownWords: PropTypes.arrayOf(PropTypes.number).isRequired,
  user: PropTypes.number.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onSummarize: PropTypes.func.isRequired
}

// <div onClick={() => onKnowClick("123123")}> {activeLetter} </div>
// <ul>
//   {wordsKnown.map((item, index) =>
//     <li key={index}> {item} </li>
//   )}
// </ul>
// wordsKnown: PropTypes.arrayOf(PropTypes.string).isRequired,

export default Card
