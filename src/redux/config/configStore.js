import { createStore } from 'redux';
import { combineReducers } from 'redux';
import loginUserReducer from '../modules/userData';
import Posts from '../modules/posts';
import AllUserReducer from '../modules/Alluser';

const rootReducer = combineReducers({
  loginUserReducer,
  Posts,
  AllUserReducer
});
const store = createStore(rootReducer);

export default store;
