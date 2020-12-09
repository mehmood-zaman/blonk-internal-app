import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authCheckState } from './store/auth/actions';
import './App.scss';
import MainLayout from './hoc/Layouts/MainLayout/MainLayout';
import Login from './containers/Auth/Login';
import Registration from './containers/Auth/Registration/Registeration';
import PrivateRoute from './components/Common/PrivateRoute/PrivateRoute';
import Activation from './containers/Auth/Activation';
import RecoverPassword from './containers/Auth/RecoverPassword/RecoverPassword';

import MainApp from './containers';
import BackOffice from './containers/BackOffice';
import MobileMarketing from './containers/MobileMarketing';
import CrawlComposer from './containers/CrawlComposer';
import NotFound from './components/Common/NotFound/NotFound';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  let layout = null;

  layout = (
    <MainLayout>
      <Switch>
        <PrivateRoute path="/" component={MainApp} exact />
        <PrivateRoute path="/backoffice" component={BackOffice} />
        <PrivateRoute path="/mobile-marketing" component={MobileMarketing} />
        <PrivateRoute path="/crawl-composer" component={CrawlComposer} />

        {/* Auth */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/activation/:activationCode" component={Activation} />
        <Route path="/recover-password" component={RecoverPassword} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </MainLayout>
  );

  return <div className="App">{layout}</div>;
};

export default withRouter(App);
