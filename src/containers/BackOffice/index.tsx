import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from 'antd';
import { setRedirectPath } from '../../store/http/actions';

import Analytics from './Analytics/Analytics';
import NotFound from '../../components/Common/NotFound/NotFound';
import CompaniesList from './Companies/CompaniesList/CompaniesList';
import BackofficeNavLinks from '../../components/BackOffice/BackofficeNavLinks';
import { GeneralStates } from '../../store/settings/types';
import { setDrawerMenuDisplay } from '../../store/settings/actions';
import ViewCompany from './Companies/ViewCompany/ViewCompany';
import AddCompany from './Companies/AddCompany/AddCompany';
import ViewRecruiter from './Recruiters/ViewRecruiter/ViewRecruiter';
import AddRecruiter from './Recruiters/AddRecruiter/AddRecruiter';
import RecruitersList from './Recruiters/RecruitersList/RecruitersList';
import JobsList from './Jobs/JobsList/JobsList';
import ViewJob from './Jobs/ViewJob/ViewJob';
import AddJob from './Jobs/AddJob/AddJob';
import CandidateLists from './Candidates/CandidateLists/CandidateLists';
import ViewCandidate from './Candidates/ViewCandidate/ViewCandidate';
import AddCandidate from './Candidates/AddCandidate/AddCandidate';

const BackOffice: React.FC = () => {
  const { path, url } = useRouteMatch();
  const { drawerMenuDisplayed } = useSelector(
    (state: GeneralStates) => state.settings
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRedirectPath(url));
  }, []);
  return (
    <>
      <Switch>
        <Route exact path={path} component={Analytics} />
        <Route exact path={`${path}/companies/add`} component={AddCompany} />
        <Route path={`${path}/companies/:id`} component={ViewCompany} />
        <Route path={`${path}/companies`} component={CompaniesList} />
        <Route exact path={`${path}/recruiters/add`} component={AddRecruiter} />
        <Route path={`${path}/recruiters/:id`} component={ViewRecruiter} />
        <Route path={`${path}/recruiters/`} component={RecruitersList} />
        <Route exact path={`${path}/jobs/add`} component={AddJob} />
        <Route path={`${path}/jobs/:id`} component={ViewJob} />
        <Route path={`${path}/jobs/`} component={JobsList} />
        <Route exact path={`${path}/candidates/add`} component={AddCandidate} />
        <Route path={`${path}/candidates/:id`} component={ViewCandidate} />
        <Route path={`${path}/candidates/`} component={CandidateLists} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>

      <Drawer
        title="Backoffice Menu"
        placement="right"
        closable={true}
        onClose={() => dispatch(setDrawerMenuDisplay(false))}
        visible={drawerMenuDisplayed}
        className="menu-drawer"
      >
        <BackofficeNavLinks
          url={url}
          closeDrawer={() => dispatch(setDrawerMenuDisplay(false))}
        />
      </Drawer>
    </>
  );
};

export default BackOffice;
