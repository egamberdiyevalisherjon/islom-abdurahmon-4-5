import { UPDATE_SEARCH_RESULT } from "../actions";

const initialState = {
  total: 0,
  books: [],
  page: 1,
  hasSearched: false,
};

function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_SEARCH_RESULT:
      return {
        ...state,
        ...payload,
        hasSearched: true,
      };

    default:
      return state;
  }
}

export default searchReducer;
