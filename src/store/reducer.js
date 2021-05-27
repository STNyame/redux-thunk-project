// src/store/reducer.js
import feedReducer from "./feed/reducer";
import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";

const reducer = combineReducers({
  // someFeature: someFeatureReducer
  feed: feedReducer,
  // etc...
});

export default reducer;
