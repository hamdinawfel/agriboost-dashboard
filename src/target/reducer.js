import {
  LOADING_CANDIDATE,
  GET_CANDIDATE,
  SET_ERRORS,
  NOT_FOUND_CANDIDATE,
} from "./types";

const initialState = {
  loading: false,
  candidate: {},
  errors: false,
  notFound: false,
  showResult: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_CANDIDATE:
      return {
        ...state,
        loading: true,
        notFound: false,
        showResult: false,
      };
    case GET_CANDIDATE:
      return {
        ...state,
        candidate: action.payload,
        loading: false,
        notFound: false,
        showResult: true,
      };
    case NOT_FOUND_CANDIDATE:
      return {
        ...state,
        notFound: true,
        loading: false,
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: true,
      };
    default:
      return state;
  }
}
