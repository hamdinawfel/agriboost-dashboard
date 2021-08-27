import {
    LOADING_CANDIDATES,
    GET_CANDIDATES,
    //
    LOADING_CANDIDATE_DETAILS,
    GET_CANDIDATE_DETAILS,
    SET_ERRORS,
    //COUNT
    LOADING_SUBMITTED_COUNT,
    GET_SUBMITTED_COUNT,

    LOADING_REJECTED_COUNT,
    GET_REJECTED_COUNT,

    LOADING_WAITED_COUNT,
    GET_WAITED_COUNT,

    LOADING_INITIAL_COUNT,
    GET_INITIAL_COUNT,

    LOADING_FINAL_COUNT,
    GET_FINAL_COUNT
    } from './types';
    
    const initialState = {
      loading: false,
      data: [],
      loadingDetails:false,
      details:{},
      criteriaList : [],
      errors: false,
      //COUNT
      loadingSubmittedCount:false,
      submittedCount:0,

      loadingRejectedCount:false,
      rejectedCount:0,

      loadingWaitedCount:false,
      waitedCount:0,

      loadingInitialCount:false,
      initialCount:0,

      loadingFinalCount:false,
      finalCount:0,
    };
    
    export default function(state = initialState, action) {
      switch (action.type) {
        case LOADING_CANDIDATES:
          return {
            ...state,
            loading: true
          };
        case GET_CANDIDATES:
          return {
            ...state,
            data: action.payload,
            loading: false,
          };
        case LOADING_CANDIDATE_DETAILS:
          return {
            ...state,
            loadingDetails: true
          };
        case GET_CANDIDATE_DETAILS:
          return {
            ...state,
            details: action.payload,
            criteriaList: action.payload.criteriaList,
            loadingDetails: false,
          };
          //COUNT
          case LOADING_SUBMITTED_COUNT:
            return {
              ...state,
              loadingSubmittedCount: true
            };
          case GET_SUBMITTED_COUNT:
            return {
              ...state,
              submittedCount: action.payload,
              loadingSubmittedCount: false
            };
          case LOADING_REJECTED_COUNT:
            return {
              ...state,
              loadingRejectedCount: true
            };
          case GET_REJECTED_COUNT:
            return {
              ...state,
              rejectedCount: action.payload,
              loadingRejectedCount: false
            };
          case LOADING_WAITED_COUNT:
            return {
              ...state,
              loadingWaitedCount: true
            };
          case GET_WAITED_COUNT:
            return {
              ...state,
              waitedCount: action.payload,
              loadingWaitedCount: false
            };
          case LOADING_INITIAL_COUNT:
            return {
              ...state,
              loadingInitialCount: true
            };
          case GET_INITIAL_COUNT:
            return {
              ...state,
              initialCount: action.payload,
              loadingInitialCount: false
            };
          case LOADING_FINAL_COUNT:
            return {
              ...state,
              loadingFinalCount: true
            };
          case GET_FINAL_COUNT:
            return {
              ...state,
              finalCount: action.payload,
              loadingFinalCount: false
            };
          case SET_ERRORS:
            return {
              ...state,
              errors:true
            };
        default:
          return state;
      }
    }