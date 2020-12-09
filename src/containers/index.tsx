import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';

const MainApp: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={path} component={Dashboard} />
      </Switch>
    </>
  );
};

export default MainApp;
