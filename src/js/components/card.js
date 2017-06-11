import React, { PropTypes } from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';

// when using spread operator (line 9) passes copy of todo
// takes two props
const Card = ({ activeLetter, wordsKnown ,onKnowClick }) => (
  <div>
  <div onClick={() => onKnowClick("123123")}> {activeLetter} </div>
  <ul>
    {wordsKnown.map((item, index) =>
      <li key={index}> {item} </li>
    )}
  </ul>
  </div>
)

Card.propTypes = {
  activeLetter: PropTypes.string.isRequired,
  wordsKnown: PropTypes.arrayOf(PropTypes.string).isRequired,
  onKnowClick: PropTypes.func.isRequired
}


export default Card
