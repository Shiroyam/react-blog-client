import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {regReducer} from './regModal/reducer'
import { searchReducer } from "./search/reducer";
import {profileReducer} from "./profile/reducer"

const rootReducer = combineReducers({
  reg:regReducer,
  search:searchReducer,
  profile:profileReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
