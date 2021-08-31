import {
    LOADING_CANDIDATES,
    GET_CANDIDATES,
  
    EDIT_CANDIDTATE_STATE,
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

import axios from 'axios';

export const getSubmittedCandidates = (page) => (dispatch) => {
    dispatch({ type: LOADING_CANDIDATES });
    axios
    .get(`${process.env.REACT_APP_API_URL}/condidates?page=${page}`)
      .then((res) => {
        dispatch({
          type: GET_CANDIDATES,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: []
        });
      });
  };

export const getRejectedCandidates = (page) => (dispatch) => {
    dispatch({ type: LOADING_CANDIDATES });
    axios
    .get(`${process.env.REACT_APP_API_URL}/condidates/rejected?page=${page}`)
      .then((res) => {
        dispatch({
          type: GET_CANDIDATES,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: []
        });
      });
  };
export const getWaitedCandidates = (page) => (dispatch) => {
    dispatch({ type: LOADING_CANDIDATES });
    axios
    .get(`${process.env.REACT_APP_API_URL}/condidates/waited?page=${page}`)
      .then((res) => {
        dispatch({
          type: GET_CANDIDATES,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: []
        });
      });
  };
export const getInitialCandidates = (page) => (dispatch) => {
    dispatch({ type: LOADING_CANDIDATES });
    axios
    .get(`${process.env.REACT_APP_API_URL}/condidates/initial?page=${page}`)
      .then((res) => {
        dispatch({
          type: GET_CANDIDATES,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: []
        });
      });
  };
export const getFinalCandidates = (page) => (dispatch) => {
    dispatch({ type: LOADING_CANDIDATES });
    axios
    .get(`${process.env.REACT_APP_API_URL}/condidates/final?page=${page}`)
      .then((res) => {
        dispatch({
          type: GET_CANDIDATES,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: []
        });
      });
  };



// Edit candidate status depond on the route
  export const editCandidateState = (condidateId, newData, page, route) => (dispatch) => {
    axios
    .put(`${process.env.REACT_APP_API_URL}/condidates/admin/${condidateId}`, newData)
      .then((res) => {
        dispatch({ type: EDIT_CANDIDTATE_STATE });
        switch (route) {
          case "submitted":
            dispatch(getSubmittedCandidates(page));
            break;
          case "rejected":
            dispatch(getRejectedCandidates(page));
            break;
          case "waited":
            dispatch(getWaitedCandidates(page));
            break;
          case "initial":
            dispatch(getInitialCandidates(page));
            break;
          case "final":
            dispatch(getFinalCandidates(page));
            break;
            default:
             dispatch(getSubmittedCandidates(page));
      }
        
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
        });
      });
  };

  //COUNT
  export const getSubmittedCount = () => (dispatch) => { 
    dispatch({ type: LOADING_SUBMITTED_COUNT });
    axios
      .get(`${process.env.REACT_APP_API_URL}/count/submitted`)
      .then((res) => {
        dispatch({
          type: GET_SUBMITTED_COUNT,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };

  export const getRejectedCount = () => (dispatch) => { 
    dispatch({ type: LOADING_REJECTED_COUNT });
    axios
      .get(`${process.env.REACT_APP_API_URL}/count/rejected`)
      .then((res) => {
        dispatch({
          type: GET_REJECTED_COUNT,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };

  export const getWaitedCount = () => (dispatch) => { 
    dispatch({ type: LOADING_WAITED_COUNT });
    axios
      .get(`${process.env.REACT_APP_API_URL}/count/waited`)
      .then((res) => {
        dispatch({
          type: GET_WAITED_COUNT,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };

  export const getInitialCount = () => (dispatch) => { 
    dispatch({ type: LOADING_INITIAL_COUNT });
    axios
      .get(`${process.env.REACT_APP_API_URL}/count/initial`)
      .then((res) => {
        dispatch({
          type: GET_INITIAL_COUNT,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };

  export const getFinalCount = () => (dispatch) => { 
    dispatch({ type: LOADING_FINAL_COUNT });
    axios
      .get(`${process.env.REACT_APP_API_URL}/count/final`)
      .then((res) => {
        dispatch({
          type: GET_FINAL_COUNT,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };
