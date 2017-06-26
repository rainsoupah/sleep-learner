import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import {Card, CardHeader, CardText} from 'material-ui/Card'
// import relevant actions if passing actions as props


// to pass functions: must add {} around prop
const styles = {
  card: {
    text: {
      padding: '0px 16px 0px 16px'
    }
  }
};

/******PRESENTATIONAL COMPONENT*****************/
const noWords = () => (
  <div>
    No Words to be learnt
  </div>
)

const hasWords = () => (
  <div>
    <FlatButton href="/player">
      <Link to="/player">
        Enter Sleep Learn Chamber
      </Link>
    </FlatButton>
  </div>
)

const PlayerSummaryPres = ({unknownWords}) => (

  <div>
      {unknownWords.length == 0 ? noWords : hasWords}
      {unknownWords.map((wordSet, i) => (
        <Card key={i}>
          <CardHeader
            title={wordSet.word}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true} style={styles.card.text}>
             {wordSet.defin}
          </CardText>
        </Card>
      ))}
  </div>
)

PlayerSummaryPres.propTypes = {
  unknownWords: PropTypes.arrayOf(PropTypes.object).isRequired
}

/******CONTAINER COMPONENT*****************/
const getUnknownWords = (words, idx) => {
  return words.filter((word, i) => i < idx)
}

const mapStateToProps = (state) => {
  return { unknownWords: getUnknownWords(state.words, state.wordIdx)}
}

const PlayerSummary = connect(
  mapStateToProps,
  null
)(PlayerSummaryPres)

// Note: export container component
export default PlayerSummary
