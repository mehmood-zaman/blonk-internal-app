import {
  authActionTypes,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_FAIL,
  SET_AUTH_REDIRECT_PATH,
} from './types';
import { history } from '../../helpers/history';
import { Dispatch } from 'redux';

export type AuthData = {
  email: string;
  password: string;
};

export const authStart = (): authActionTypes => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (
  accessToken: string,
  userName: string
): authActionTypes => {
  return {
    type: AUTH_SUCCESS,
    accessToken,
    userName,
  };
};

export const authFail = (error: string): authActionTypes => {
  return {
    type: AUTH_FAIL,
    error,
  };
};

export const authLogout = (): authActionTypes => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('fullName');
  return {
    type: AUTH_LOGOUT,
  };
};

export const setAuthRedirectPath = (path: string): authActionTypes => {
  return {
    type: SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const checkAuthTimeout = (expirationTime: number) => async (
  dispatch: Dispatch<authActionTypes>
) => {
  setTimeout(() => {
    dispatch<any>(authLogout());
  }, expirationTime * 1000);
};

// export const auth = (email: string, password: string) => async (
//   dispatch: Dispatch<authActionTypes>
// ) => {
//   dispatch<any>(authStart());

//   const authData: AuthData = {
//     email: email,
//     password: password,
//   };

//   //setting expiry time
//   const expiresIn: number = 86000;

//   console.log('authData', authData);

//   let url = `${BASE_URL}/soblonk/login`;

//   axios
//     .post(url, authData, { timeout: 60000 })
//     .then((response) => {
//       //check account type of user
//       //date conversion for expiry
//       const expirationDate: any = new Date(
//         new Date().getTime() + expiresIn * 1000
//       );

//       //storing data in local storage
//       localStorage.setItem('token', response.data.user.accessToken);
//       localStorage.setItem('expirationDate', expirationDate);
//       localStorage.setItem('userName', response.data.user.id);

//       //dispating data to states
//       dispatch(authSuccess(response.data.accessToken, response.data.user.id));
//       dispatch<any>(checkAuthTimeout(expiresIn));
//       history.push('/');
//       console.log('auth response', response);
//     })
//     .catch((err) => {
//       console.log('error response', err);

//       if (err.response) {
//         //dispatching error
//         dispatch(authFail(err.response.data.message));
//       } else {
//         //if API is down or any other server error.
//         dispatch(authFail('Something went wrong. Please try later.'));
//       }
//     });
// };

export const auth = (accessToken: string, fullName: string) => async (
  dispatch: Dispatch<authActionTypes>
) => {
  dispatch<any>(authStart());

  //setting expiry time
  const expiresIn: number = 86000;

  //date conversion for expiry
  const expirationDate: any = new Date(new Date().getTime() + expiresIn * 1000);

  //storing data in local storage
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('expirationDate', expirationDate);
  localStorage.setItem('userName', fullName);

  //dispating data to states
  dispatch(authSuccess(accessToken, fullName));
  dispatch<any>(checkAuthTimeout(expiresIn));
  // history.push('/');
};

export const authCheckState = () => {
  const expiry: any = localStorage.getItem('expirationDate');
  const token: any = localStorage.getItem('accessToken');
  const userName: any = localStorage.getItem('userName');

  return (dispatch: Dispatch<authActionTypes>) => {
    if (!token) {
      dispatch(authLogout());
    } else {
      const expirationDate = new Date(expiry);
      if (expirationDate <= new Date()) {
        dispatch(authLogout());
      } else {
        dispatch<any>(authSuccess(token, userName));
        dispatch<any>(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
