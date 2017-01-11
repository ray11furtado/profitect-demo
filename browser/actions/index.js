import axios from 'axios';
import {
  CHANGE_COMPANY,
  GET_COMPANY_DATA,
  USER_INFO,
  LOGIN_USER,
  CREATE_USER,
} from './types';

export function changeCompany(company) {
  return (dispatch) => {
    dispatch({ type: CHANGE_COMPANY, payload: company });
  };
}

export function getCompanyData(company) {
  return (dispatch) => {
    // simulate database api with data
    axios.get(`/api/data/${company}`)
    .then((res) => {
      dispatch({ type: GET_COMPANY_DATA, payload: res.data });
    })
    .catch(err => console.log(err));
  };
}

// Will search for a user or create one
export function loginOrCreateUser(email, password) {
  return (dispatch) => {
    axios.get('/api/user', {
      params: {
        email,
        password,
      },
    })
    .then((res) => {
      if (res.data) dispatch({ type: LOGIN_USER, payload: res.data });
      else {
        axios.post('/api/user', {
          email,
          password,
        })
        .then((response) => {
          dispatch({ type: CREATE_USER, payload: response.data });
        });
      }
    });
  };
}

// Would be used to get current USER's data, ID could be set on application state when user logs in
export function getUserData(ID) {
  return (dispatch) => {
    axios.get('/user', {
      params: {
        ID,
      },
    })
  .then((res) => {
    dispatch({ type: USER_INFO, payload: res.data });
  })
  .catch((error) => {
    console.log(error);
  });
  };
}
