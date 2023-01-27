import { combineReducers } from "redux";
import searchReducer from "./search";
import bookmarkReducer from "./bookmark";

const rootReducer = combineReducers({
  search: searchReducer,
  bookmarks: bookmarkReducer,
});

export default rootReducer;
