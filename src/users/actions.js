import {
    GET_USERS,
    LOADING_USERS,
    EDIT_USER,
    DELETE_USER,
    ADD_USER,
    SET_ERRORS,
    OPEN,
    CLOSE
  } from './types';
import axios from 'axios';
 
export const getUsers = () => (dispatch) => {
    dispatch({ type: LOADING_USERS });
    axios
    .get(`${process.env.REACT_APP_API_URL}/users`)
      .then((res) => {
        dispatch({
          type: GET_USERS,
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
 
  export const editUser = (userId, newData) => (dispatch) => {
    axios
    .put(`${process.env.REACT_APP_API_URL}/users/${userId}`, newData)
      .then((res) => {
        dispatch({ type: EDIT_USER });
        dispatch(getUsers());
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
        });
      });
  };
  
export const deleteUser = (userId) => (dispatch) => {
  axios
  .delete(`${process.env.REACT_APP_API_URL}/users/${userId}`)
    .then((res) => {
      dispatch({ type: DELETE_USER });
      dispatch(getUsers());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
      });
    });
};
export const addNewUser = (data) => (dispatch) => {
  axios
  .post(`${process.env.REACT_APP_API_URL}/users/signup`, data)
    .then((res) => {
      dispatch({ type: ADD_USER });
      dispatch(getUsers());
      dispatch(close());
    })
    .catch(err =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    )
};

export const open =() => (dispatch) => {
  dispatch({
    type: OPEN,
  })
};
export const close =() => (dispatch) => {
  dispatch({
    type: CLOSE,
  })
};

