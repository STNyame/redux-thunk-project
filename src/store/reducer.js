// src/store/reducer.js
import feedReducer from "./feed/reducer";
import { combineReducers } from "redux";
import postPageSliceReducer from "./postPage/reducer";
// import someFeatureReducer from "./someFeature/reducer";

const reducer = combineReducers({
  // someFeature: someFeatureReducer
  feed: feedReducer,
  postPage: postPageSliceReducer,
  // etc...
});

export default reducer;
