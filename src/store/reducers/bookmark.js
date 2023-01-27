import { ADD_BOOKMARKS, UPDATE_BOOKMARKS } from "../actions";

const initialState = [];

function bookmarkReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_BOOKMARKS:
      return [...state, ...payload];
    case UPDATE_BOOKMARKS:
      return payload;

    default:
      return state;
  }
}

export default bookmarkReducer;
