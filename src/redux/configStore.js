import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {words} from "./modules/words";

const middlewares = [thunk];
const rootReducer = combineReducers({ words: words.reducer });
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;