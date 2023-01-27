import { combineReducers } from "redux";
import searchReducer from "./search";
import bookmarkReducer from "./bookmark";
import detailReducer from "./details";

const rootReducer = combineReducers({
  search: searchReducer,
  bookmarks: bookmarkReducer,
  detail: detailReducer,
});

export default rootReducer;
