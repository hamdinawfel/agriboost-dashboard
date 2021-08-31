import {
  LOADING_USER,
  GET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SHOW_SUCCESS_MSG,
} from './types';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post(`${process.env.REACT_APP_API_URL}/users/login`, userData)
    .then(res => { 
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    );
};


export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('accessToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
 const  token = localStorage.getItem("accessToken");
  const decodedToken = jwtDecode(token);
  axios
    .get(`${process.env.REACT_APP_API_URL}/users/admin/${decodedToken._id}`)
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};
const setAuthorizationHeader = (token) => {
  const accessToken = `bearer ${token}`;
  localStorage.setItem('accessToken', accessToken);
  axios.defaults.headers.common['Authorization'] = accessToken;
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
}

export const editProfile = (userId, userData ) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .put(`${process.env.REACT_APP_API_URL}/users/${userId}`, userData)
    .then(res => { 
      dispatch(getUserData());
      dispatch({ type: SHOW_SUCCESS_MSG });
    })
    .catch(err =>
      console.log(err)
    );
};
//change pwd
export const changePassword = (passwordData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post(`${process.env.REACT_APP_API_URL}/users/change-password`, passwordData)
    .then(res => { 
      dispatch(logoutUser());
    })
    .catch(err =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    );
};


