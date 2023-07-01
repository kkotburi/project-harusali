import { createStore } from 'redux';
import { combineReducers } from 'redux';
import loginUserReducer from '../modules/userData';
import Posts from '../modules/posts';

const rootReducer = combineReducers({
  loginUserReducer,
  Posts
});
const store = createStore(rootReducer);

export default store;
