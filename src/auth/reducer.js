import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  GET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  SHOW_SUCCESS_MSG,
} from "./types";

const initialState = {
  authenticated: false,
  loading: false,
  user: {},
  errors: {},
  showSuccessMsg: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case GET_USER:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case SHOW_SUCCESS_MSG:
      return {
        ...state,
        showSuccessMsg: true,
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
      };
    default:
      return state;
  }
}
