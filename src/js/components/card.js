import React, { PropTypes } from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';

// when using spread operator (line 9) passes copy of todo
// takes two props
const Card = ({ activeWord, activeIdx, onNextClick }) => (
  <div>
    <div> {activeWord.word} </div>
    <div> {activeWord.defin} </div>
    <button onClick={() => onNextClick(true, activeWord.word, activeIdx)}> I Know </button>
    <button onClick={() => onNextClick(false)}> I dont Know </button>
  </div>
)

Card.propTypes = {
  activeWord: PropTypes.object.isRequired,
  onNextClick: PropTypes.func.isRequired
}

// <div onClick={() => onKnowClick("123123")}> {activeLetter} </div>
// <ul>
//   {wordsKnown.map((item, index) =>
//     <li key={index}> {item} </li>
//   )}
// </ul>
// wordsKnown: PropTypes.arrayOf(PropTypes.string).isRequired,

export default Card
