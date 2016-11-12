import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // we need this for react-router
import power from './power';
const rootReducer = combineReducers({ power, routing: routerReducer });

export default rootReducer;
