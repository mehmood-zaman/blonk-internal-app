import {
  Authentication,
  authActionTypes,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_FAIL,
  SET_AUTH_REDIRECT_PATH,
} from './types';

import { updateObject } from '../../helpers/updateObject';

const initialState: Authentication = {
  accessToken: localStorage.getItem('accessToken') || null,
  userName: null,
  error: null,
  loading: false,
  authRedirectPath: '/',
};

const authStart = (state: Authentication, action: authActionTypes) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state: Authentication, action: any) => {
  return updateObject(state, {
    accessToken: action.accessToken,
    userName: action.userName,
    error: null,
    loading: false,
  });
};

const authFail = (state: Authentication, action: any) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state: Authentication, action: authActionTypes) => {
  return updateObject(state, { accessToken: null, userName: null });
};

const setAuthRedirectPath = (state: Authentication, action: any) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const authReducer = (state = initialState, action: authActionTypes) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_FAIL:
      return authFail(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    case SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default authReducer;
