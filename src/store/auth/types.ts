export interface Authentication {
  accessToken: null | string;
  userName: null | string;
  error: null | string;
  loading: boolean;
  authRedirectPath: string;
}

export interface AuthState {
  auth: Authentication;
}

// Describing the different ACTION NAMES available
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';

interface AuthStart {
  type: typeof AUTH_START;
}

interface AuthSuccess {
  type: typeof AUTH_SUCCESS;
  accessToken: string;
  userName: string;
}

interface AuthFail {
  type: typeof AUTH_FAIL;
  error: string;
}

interface AuthLogout {
  type: typeof AUTH_LOGOUT;
}

interface SetAuthRedirectPath {
  type: typeof SET_AUTH_REDIRECT_PATH;
  path: string;
}

export type authActionTypes =
  | AuthSuccess
  | AuthStart
  | AuthFail
  | AuthLogout
  | SetAuthRedirectPath;
