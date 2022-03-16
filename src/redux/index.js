import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {searchReducer} from "./search/reducer";
import {profileReducer} from "./profile/reducer"
import {postsReducer} from "./posts/reducer"
import { postReducer } from "./posts/reducerOpen";
import {authReducer} from "./authorization/reducer"
import { regReducer } from "./registration/regReducer";
import {commentsReducer} from "./comments/reducer"



const rootReducer = combineReducers({
  search:searchReducer,
  post:postsReducer,
  open:postReducer,
  profile:profileReducer,
  auth:authReducer,
  reg:regReducer,
  comments:commentsReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
