import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthState } from '../../../store/auth/types';

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(
    (state: AuthState) => state.auth.accessToken !== null
  );
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
