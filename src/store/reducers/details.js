import { UPDATE_DETAIL } from "../actions";

const initialState = null;

function detailReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_DETAIL:
      return payload;

    default:
      return state;
  }
}

export default detailReducer;
