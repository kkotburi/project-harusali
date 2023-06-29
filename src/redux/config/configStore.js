import { createStore } from "redux"; 
import { combineReducers } from "redux";
import feeds from "../modules/feed";

const rootReducer = combineReducers({
feeds
});
const store = createStore(rootReducer);

export default store;