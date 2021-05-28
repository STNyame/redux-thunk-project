// src/store/reducer.js
import feedReducer from "./feed/reducer";
import { combineReducers } from "redux";
import postPageSliceReducer from "./postPage/reducer";
import authReducer from "./auth/reducer";
// import someFeatureReducer from "./someFeature/reducer";

const reducer = combineReducers({
  // someFeature: someFeatureReducer
  feed: feedReducer,
  postPage: postPageSliceReducer,
  auth: authReducer,
  // etc...
});

export default reducer;
