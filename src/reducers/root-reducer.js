import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import getHouseData from './GetDataReducer';

const rootReducer = combineReducers({
  fake,
  getHouseData
});


export default rootReducer;
