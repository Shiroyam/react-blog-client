import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {regReducer} from './regModal/reducer'
import { searchReducer } from "./search/reducer";

const rootReducer = combineReducers({
  reg:regReducer,
  search:searchReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
