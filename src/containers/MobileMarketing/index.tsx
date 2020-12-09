import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from 'antd';

import Analytics from './Analytics/Analytics';
import NotFound from '../../components/Common/NotFound/NotFound';
import MobileMarketingLinks from '../../components/MobileMarketing/MobileMarketingLinks/MobileMarketingLinks';
import { GeneralStates } from '../../store/settings/types';
import { setDrawerMenuDisplay } from '../../store/settings/actions';
const MobileMarketing: React.FC = () => {
  const { path, url } = useRouteMatch();

  const { drawerMenuDisplayed } = useSelector(
    (state: GeneralStates) => state.settings
  );
  const dispatch = useDispatch();

  return (
    <>
      <Switch>
        <Route exact path={path} component={Analytics} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
      <Drawer
        title="Mobile Marketing Menu"
        placement="right"
        closable={true}
        onClose={() => dispatch(setDrawerMenuDisplay(false))}
        visible={drawerMenuDisplayed}
        className="menu-drawer"
      >
        <MobileMarketingLinks
          url={url}
          closeDrawer={() => dispatch(setDrawerMenuDisplay(false))}
        />
      </Drawer>
    </>
  );
};

export default MobileMarketing;
