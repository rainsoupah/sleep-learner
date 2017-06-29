import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'

const styles = {
  TableWrap: {
    margin: '1% auto',
    width: '700px',
  },
  TableMain: {
    width: 'inherit',
  },
  TableHeader: {
    backgroundColor: '#04294a',
  },
  HeaderCell: {
    fontSize: '15px',
    width: '100%'
  },
  HeaderCellTwo: {
    borderTopRightRadius: '50px',
    borderStyle: 'hidden'
  },
  link: {
    height:'56px',
    textAlign: 'right',
  },
  playerBut: {
    height: '56px',
    fontSize: '15px',
    borderRadius: '17px',
    borderStyle: 'hidden'
  },
};

/******PRESENTATIONAL COMPONENT*****************/
const PlayerSummaryPres = ({unknownWords}) => (
  <div>

      {
        unknownWords.length > 0 &&
        (
          <div style={styles.TableWrap}>
            <Table selectable={false} fixedHeader={true} height='500px' style={styles.TableMain}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false} style={styles.TableHeader}>
              <TableRow style={styles.TableHeaderRow}>
                <TableHeaderColumn style={styles.HeaderCell}>
                   My Study Plan: {0}/{unknownWords.length} words studied
                </TableHeaderColumn>
                <TableHeaderColumn style={styles.HeaderCellTwo}>
                  <Link to="/player" style={styles.link}>
                    <FlatButton style={styles.playerBut}
                      icon={<ArrowForward color="green"/>}
                      primary={true}
                      label="Enter Sleep Learn"
                      labelPosition='before'
                      rippleColor="white"
                      />
                  </Link>
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {unknownWords.map((_word, i) => (
                <TableRow key={i}>
                  <TableRowColumn> {i+1}</TableRowColumn>
                  <TableRowColumn> {_word.word} </TableRowColumn>
                  <TableRowColumn> {_word.type} </TableRowColumn>
                  <TableRowColumn> {_word.defin} </TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </div>

        )
      }

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
  return {
    unknownWords: getUnknownWords(state.words, state.wordIdx)
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     redirect: (strUrl) => {
//       dispatch(redirect(strUrl))
//     }
//   }
// }

const PlayerSummary = connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(PlayerSummaryPres)

export default PlayerSummary
