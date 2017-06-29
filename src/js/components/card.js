import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import ReactDOM from 'react-dom'

// import CheckCircle from 'material-ui/svg-icons/action/checkCircle'
// import DoneAll from 'material-ui/svg-icons/action/doneAll'
import Close from 'material-ui/svg-icons/navigation/close'
import Check from 'material-ui/svg-icons/navigation/check'
import Assessment from 'material-ui/svg-icons/action/assessment'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  card: {
    margin: '100px auto',
    float: 'none',
    width: 450,
    position: 'relative',
    fontFamily: 'Patrick Hand SC, Cursive'
  },
  text: {
    padding: '0px 16px 10px 16px',
    fontSize: '24px',
    backgroundColor: '#e4e4ff',
  },
  headerTitle: {
    fontSize: '36px',
  },
  subTitle:{
    fontSize:'20px',
  },
  header: {
    backgroundColor:'#e4e4ff',
  },
  checkButton: {
    marginRight: '56%',
    // marginLeft: '10%',
  },
  cancelButton: {
    float:'right',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '30px',
    height:'150px',
  },
  sumButton: {
    height: '150px',
    color: '#ccccff'
  },
  actions: {
    // padding: '0px',
    paddingLeft:'39%',
    backgroundColor: '#04294a'
  },
  sleepLearnIcon: {
    color: 'grey',
    height:'150px',
    width:'50px',
  }
};

const CardPres = ({ activeWord, activeIdx, knownWords, user, onNextClick, onSummarize }) => (
  <div >
    <Card style={styles.card}>
      <Link to="/playerSummary" style={styles.link}>
          <FlatButton onTouchTap={() => onSummarize(user.userid, knownWords)}
           fullWidth={true} style={styles.sumButton} icon={<Assessment style={styles.sleepLearnIcon}/>}>
           Proceed to Sleep Learn
          </FlatButton>
      </Link>
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
      <CardActions style={styles.actions}>
        <FlatButton onTouchTap={() => onNextClick(true, activeWord.idx, activeIdx)}
          icon={<Check color="#66ff66"/>} label="Known" primary={true}
        />
        <FlatButton onTouchTap={() => onNextClick(false)}
          icon={<Close color="#ff4d4d"/>} label="Unknown" secondary={true}
        />
      </CardActions>
    </Card>

  </div>
)


CardPres.propTypes = {
  knownWords: PropTypes.arrayOf(PropTypes.number).isRequired,
  user: PropTypes.object.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onSummarize: PropTypes.func.isRequired
}

export default CardPres
