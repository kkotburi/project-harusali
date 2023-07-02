import { createStore } from 'redux';
import { combineReducers } from 'redux';
import loginUserReducer from '../modules/userData';
import Posts from '../modules/posts';
import users from '../modules/users';

const rootReducer = combineReducers({
  loginUserReducer,
  Posts,
  users
});
const store = createStore(rootReducer);

export default store;
