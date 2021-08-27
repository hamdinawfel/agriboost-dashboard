import {
    LOADING_CANDIDATE,
    GET_CANDIDATE,
    NOT_FOUND_CANDIDATE,
    EDIT_CANDIDTATE_STATE,
    SET_ERRORS
  } from './types';
import axios from 'axios';

export const getCandidateByCin = (candidateCin) => (dispatch) => {
    dispatch({ type: LOADING_CANDIDATE });
    axios
    .get(`${process.env.REACT_APP_API_URL}/condidates/search/${candidateCin}`)
      .then((res) => {
        dispatch({
          type: GET_CANDIDATE,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: NOT_FOUND_CANDIDATE
        });
      });
  };

  export const editCandidateState = (condidateId, newData, candidateCin) => (dispatch) => {
    axios
    .put(`${process.env.REACT_APP_API_URL}/condidates/admin/${condidateId}`, newData)
      .then((res) => {
        dispatch({ type: EDIT_CANDIDTATE_STATE });
        dispatch(getCandidateByCin(candidateCin));
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
        });
      });
  };
