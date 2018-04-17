import { combineReducers } from 'redux';
import auth from './reducers/auth';
import {reducer as notifications} from 'react-notification-system-redux';

export default combineReducers({
  auth,
  notifications
});