import { LOADING, GET_RECLAMATIONS, SET_ERROR } from "./types";
import axios from "axios";

export const getReclamations = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(`${process.env.REACT_APP_API_URL}/reclamations`)
    .then((res) => {
      dispatch({
        type: GET_RECLAMATIONS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR });
    });
};
export const deleteReclamation = (reclamationId) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_API_URL}/reclamations/${reclamationId}`)
    .then((res) => {
      dispatch(getReclamations());
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR });
    });
};
