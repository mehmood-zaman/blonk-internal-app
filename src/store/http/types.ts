export interface Http {
  loading: boolean;
  error: string | null;
  data: object | null;
  redirectPath: string | null;
  identifier: string | null;
}
export interface HttpState {
  http: Http;
}
//Genereal API
export const HTTP_REQUREST_START = 'HTTP_REQUREST_START';
export const HTTP_REQUREST_SUCCESS = 'HTTP_REQUREST_SUCCESS';
export const HTTP_REQUREST_FAIL = 'HTTP_REQUREST_FAIL';
export const HTTP_REQUREST_CLEAR = 'HTTP_REQUREST_CLEAR';
export const HTTP_REQUREST_RESET = 'HTTP_REQUREST_RESET';
export const SET_REDIRECT_PATH = 'SET_REDIRECT_PATH';

interface httpStart {
  type: typeof HTTP_REQUREST_START;
}

interface httpClear {
  type: typeof HTTP_REQUREST_CLEAR;
}
interface httpReset {
  type: typeof HTTP_REQUREST_RESET;
}

interface httpSuccess {
  type: typeof HTTP_REQUREST_SUCCESS;
  responseData: object;
  identifier: string;
}

interface httpFail {
  type: typeof HTTP_REQUREST_FAIL;
  error: string;
  identifier: string;
}

interface setRedirectPath {
  type: typeof SET_REDIRECT_PATH;
  path: string;
}

export type httpActionTypes =
  | httpStart
  | httpSuccess
  | httpFail
  | httpReset
  | httpClear
  | setRedirectPath;
