import {
    GET_USERS,
    LOADING_USERS,
    SET_ERRORS,
    CLEAR_ERRORS,
    OPEN,
    CLOSE
    } from './types';
    
    const initialState = {
      loading: false,
      data: [],
      errors:{},
      open:false
    };
    
    export default function(state = initialState, action) {
      switch (action.type) {
        case LOADING_USERS:
          return {
            ...state,
            loading: true
          };
        case GET_USERS:
          return {
            ...state,
            data: action.payload,
            loading: false,
          };
        case GET_USERS:
          return {
            ...state,
            data: action.payload,
            loading: false,
          };
          case SET_ERRORS:
            return {
              ...state,
              loading: false,
              errors: action.payload
            };
          case CLEAR_ERRORS:
            return {
              ...state,
              errors: {},
              open:false
            };
          case OPEN:
            return {
              ...state,
              open:true
            };
          case CLOSE:
            return {
              ...state,
              open:false
            };
        default:
          return state;
      }
    }