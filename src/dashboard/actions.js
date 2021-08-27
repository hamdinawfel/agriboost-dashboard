import {
    LOADING,
    GET_STOCK_BUDGET,
    GET_REVENUES,
    SET_ERROR
  } from './types';
import axios from 'axios';
 
export const getStockBudget = () => (dispatch) => {
    dispatch({ type: LOADING });
    axios
    .get(`${process.env.REACT_APP_API_URL}/admin/budget`)
      .then((res) => {
        dispatch({
          type: GET_STOCK_BUDGET,
          payload: res.data[0].stockBudget
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERROR,
          payload: []
        });
      });
  };
 
export const getRevenues = () => (dispatch) => {
    dispatch({ type: LOADING });
    axios
    .get(`${process.env.REACT_APP_API_URL}/admin/revenue`)
      .then((res) => {
        dispatch({
          type: GET_REVENUES,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERROR,
          payload: []
        });
      });
  };
 
  