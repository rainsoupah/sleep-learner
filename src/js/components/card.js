import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const styles = {
  card: {
    text: {
      padding: '0px 16px 0px 16px'
    }
  }
};

const CardPres = ({ activeWord, activeIdx, knownWords, user, onNextClick, onSummarize }) => (
  <Card>
    <CardHeader
      title={activeWord.word}
      subtitle={activeWord.type}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true} style={styles.card.text}>
      Definition: {activeWord.defin}
    </CardText>
    <CardActions>
      <FlatButton label="I know" onTouchTap={() => onNextClick(true, activeWord.idx, activeIdx)}/>
      <FlatButton label="Don't Know" onTouchTap={() => onNextClick(false)}/>
      <FlatButton onTouchTap={() => onSummarize(user.userid, knownWords)}>
        <Link to="/playerSummary">
          Proceed to Quiz Summary
        </Link>
      </FlatButton>
    </CardActions>
  </Card>
)

CardPres.propTypes = {
  activeWord: PropTypes.object.isRequired,
  knownWords: PropTypes.arrayOf(PropTypes.number).isRequired,
  user: PropTypes.object.isRequired,
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

export default CardPres
