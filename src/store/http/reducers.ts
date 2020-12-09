import {
  Http,
  SET_REDIRECT_PATH,
  httpActionTypes,
  HTTP_REQUREST_START,
  HTTP_REQUREST_SUCCESS,
  HTTP_REQUREST_FAIL,
  HTTP_REQUREST_CLEAR,
  HTTP_REQUREST_RESET,
} from './types';

import { updateObject } from '../../helpers/updateObject';

const initialState: Http = {
  loading: false,
  error: null,
  data: null,
  redirectPath: null,
  identifier: null,
};

const httpStart = (state: Http, action: any) => {
  return updateObject(state, { error: null, loading: true, identifier: null });
};

const httpClear = (state: Http, action: any) => {
  return updateObject(state, { error: null, loading: false, identifier: null });
};

const httpReset = (state: Http, action: any) => {
  return updateObject(state, {
    error: null,
    loading: false,
    data: null,
    identifier: null,
  });
};

const httpSuccess = (state: Http, action: any) => {
  return updateObject(state, {
    data: action.responseData,
    identifier: action.idetifier,
    error: null,
    loading: false,
  });
};

const httpFail = (state: Http, action: any) => {
  return updateObject(state, {
    error: action.error,
    identifier: action.idetifier,
    loading: false,
  });
};

const setRedirectPath = (state: Http, action: any) => {
  return updateObject(state, { redirectPath: action.path });
};

const httpReducer = (state = initialState, action: httpActionTypes) => {
  switch (action.type) {
    case HTTP_REQUREST_START:
      return httpStart(state, action);
    case HTTP_REQUREST_SUCCESS:
      return httpSuccess(state, action);
    case HTTP_REQUREST_FAIL:
      return httpFail(state, action);
    case HTTP_REQUREST_CLEAR:
      return httpClear(state, action);
    case HTTP_REQUREST_RESET:
      return httpReset(state, action);
    case SET_REDIRECT_PATH:
      return setRedirectPath(state, action);
    default:
      return state;
  }
};

export default httpReducer;
