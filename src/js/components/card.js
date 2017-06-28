import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import ReactDOM from 'react-dom'

import CheckCircle from 'material-ui/svg-icons/action/check-circle'
import Cancel from 'material-ui/svg-icons/navigation/cancel'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const styles = {
  card: {
    margin: '100px 300px',
    height: 300,
    width: 300,
    position: 'absolute',
    // zIndex: 'auto'
  },
  text: {
    padding: '0px 16px 0px 16px',
    fontSize: '30px'
  },
  headerTitle: {
    fontSize: '36px',
  },
  subTitle:{
    fontSize:'20px',
  }
};

const CardPres = ({ activeWord, activeIdx, knownWords, user, onNextClick, onSummarize }) => (
  <div >
    <Card style={styles.card}>
      <CardHeader style={styles.header}
        title={activeWord.word}
        titleStyle={styles.headerTitle}
        subtitle={activeWord.type}
        subtitleStyle={styles.subTitle}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true} style={styles.text}>
        Definition: {activeWord.defin}
      </CardText>
      <CardActions>
        <FloatingActionButton onTouchTap={() => onNextClick(true, activeWord.idx, activeIdx)}>
          <CheckCircle color="green"/>
        </FloatingActionButton>
        <FloatingActionButton onTouchTap={() => onNextClick(false)}>
          <Cancel color="red"/>
        </FloatingActionButton>
      </CardActions>
    </Card>

    <FlatButton onTouchTap={() => onSummarize(user.userid, knownWords)}>
      <Link to="/playerSummary">
        Proceed to Quiz Summary
      </Link>
    </FlatButton>
  </div>
)

// <FlatButton label="I know" onTouchTap={() => onNextClick(true, activeWord.idx, activeIdx)}/>
// <FlatButton label="Don't Know" onTouchTap={() => onNextClick(false)}/>
CardPres.propTypes = {
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
