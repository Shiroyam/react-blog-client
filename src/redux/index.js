import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {regReducer} from './regModal/reducer'
import {searchReducer} from "./search/reducer";
import {profileReducer} from "./profile/reducer"
import {postsReducer} from "./posts/reducer"
import { postReducer } from "./posts/reducerOpen";



const rootReducer = combineReducers({
  reg:regReducer,
  search:searchReducer,
  post:postsReducer,
  open:postReducer,
  profile:profileReducer,

});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
