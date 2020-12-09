import {
  httpActionTypes,
  HTTP_REQUREST_START,
  HTTP_REQUREST_SUCCESS,
  HTTP_REQUREST_RESET,
  HTTP_REQUREST_CLEAR,
  HTTP_REQUREST_FAIL,
  SET_REDIRECT_PATH,
} from './types';
import axios from 'axios';
import { Dispatch } from 'redux';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const httpStart = (): httpActionTypes => {
  return {
    type: HTTP_REQUREST_START,
  };
};

export const httpClear = (): httpActionTypes => {
  return {
    type: HTTP_REQUREST_CLEAR,
  };
};

export const httpReset = (): httpActionTypes => {
  return {
    type: HTTP_REQUREST_RESET,
  };
};

export const httpSuccess = (
  response: object,
  reqIdentifier: string
): httpActionTypes => {
  return {
    type: HTTP_REQUREST_SUCCESS,
    responseData: response,
    identifier: reqIdentifier,
  };
};

export const httpFail = (
  error: string,
  reqIdentifier: string
): httpActionTypes => {
  return {
    type: HTTP_REQUREST_FAIL,
    error: error,
    identifier: reqIdentifier,
  };
};

export const setRedirectPath = (path: string): httpActionTypes => {
  return {
    type: SET_REDIRECT_PATH,
    path: path,
  };
};

export const fetchData = (url: string, reqIdentifier: string) => async (
  dispatch: Dispatch<httpActionTypes>
) => {
  dispatch(httpStart());
  let api: string = BASE_URL + url;
  const accessToken = await localStorage.getItem('token');
  axios
    .get(api, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((responseData) => {
      console.log('responseData', responseData);
      dispatch(httpSuccess(responseData.data, reqIdentifier));
    })
    .catch((err) => {
      console.log('error', err);

      if (err.response) {
        dispatch(httpFail(err.response.data.message, reqIdentifier));
      } else {
        dispatch(
          httpFail('Something went wrong. Please try later.', reqIdentifier)
        );
      }
    });
};

export const sendData = (
  url: string,
  data: object,
  reqIdentifier: string
) => async (dispatch: Dispatch<httpActionTypes>) => {
  dispatch(httpStart());
  let api = BASE_URL + url;
  const accessToken = await localStorage.getItem('token');

  axios
    .post(api, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((responseData) => {
      console.log('sendData responseData', responseData);
      dispatch(httpSuccess(responseData.data, reqIdentifier));
    })
    .catch((err) => {
      console.log('error', err);

      if (err.response) {
        dispatch(httpFail(err.response.data.message, reqIdentifier));
      } else {
        dispatch(
          httpFail('Something went wrong. Please try later.', reqIdentifier)
        );
      }
    });
};

export const register = (
  fullName: string,
  email: string,
  password: string,
  title: string
) => async (dispatch: Dispatch<httpActionTypes>) => {
  dispatch(httpStart());
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    title: title,
    type: 'employer',
    role: 'recruiter',
    verified: false,
  };

  let url = `${BASE_URL}/soblonk/register`;

  axios
    .post(url, data, { timeout: 4000 })
    .then((responseData) => {
      console.log('register responseData', responseData);
      dispatch(httpSuccess(responseData.data, 'REGISTRATION'));
    })
    .catch((err) => {
      console.log('register error', err);
      if (err.response) {
        dispatch(httpFail(err.response.data.message, 'REGISTRATION'));
      } else {
        dispatch(
          httpFail('Something went wrong. Please try later.', 'REGISTRATION')
        );
      }
    });
};

export const activate = (activationCode: string) => async (
  dispatch: Dispatch<httpActionTypes>
) => {
  dispatch(httpStart());
  const data = {
    activationCode: activationCode,
  };

  let url = `${BASE_URL}/soblonk/activate`;

  axios
    .post(url, data, { timeout: 4000 })
    .then((responseData) => {
      dispatch(httpSuccess(responseData.data, 'ACCOUNT_CONFIRMATION'));
    })
    .catch((err) => {
      if (err.response) {
        dispatch<any>(
          httpFail(err.response.data.message, 'ACCOUNT_CONFIRMATION')
        );
      } else {
        dispatch(
          httpFail(
            'Something went wrong. Please try later.',
            'ACCOUNT_CONFIRMATION'
          )
        );
      }
    });
};
