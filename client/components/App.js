import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import LoadButton from './LoadButton';
function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
 
var App = connect(mapStateToProps, mapDispatchToProps)(LoadButton);

export default App;
