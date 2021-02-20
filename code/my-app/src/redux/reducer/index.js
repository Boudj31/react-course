import { combineReducers } from 'redux';
import counter from './reducerCounter';
import user from './reducerUser';
import authentication from './reducerAuthentication';

export default combineReducers({counter, user, authentication});
