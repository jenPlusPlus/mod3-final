import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import houseData from './GetDataReducer';
import swornMembers from './GetSwornMembersReducer';

const rootReducer = combineReducers({
  fake,
  houseData,
  swornMembers
});


export default rootReducer;
