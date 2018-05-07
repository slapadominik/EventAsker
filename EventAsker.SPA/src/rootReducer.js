import { combineReducers } from 'redux';
import auth from './reducers/authReducer';
import {reducer as notifications} from 'react-notification-system-redux';
import lectureReducer from './reducers/lectureReducer';

export default combineReducers({
  auth,
  notifications,
  lectureReducer
});