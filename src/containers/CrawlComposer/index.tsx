import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from 'antd';

import Dashboard from './Dashboard/';
import NotFound from 'components/Common/NotFound/NotFound';
import CrawlComposerLinks from 'components/CrawlComposer/CrawlComposerLinks/CrawlComposerLinks';
import { GeneralStates } from '../../store/settings/types';
import { setDrawerMenuDisplay } from '../../store/settings/actions';
import CrawliesListing from './Crawlies listing/index';
import CrawlingGroups from './Crawlies Groups/index';
import CampaignDetails from './Campaign Details/index';
const CrawlComposer: React.FC = () => {
  const { path, url } = useRouteMatch();

  const { drawerMenuDisplayed } = useSelector(
    (state: GeneralStates) => state.settings
  );
  const dispatch = useDispatch();
  return (
    <>
      <Switch>
        <Route exact path={path} component={Dashboard} />
        <Route path={`${path}/crawlies`} component={CrawliesListing} />
        <Route path={`${path}/crawlies-groups`} component={CrawlingGroups} />
        <Route path={`${path}/campaign-details`} component={CampaignDetails} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
      <Drawer
        title="Crawl Composer Menu"
        placement="right"
        closable={true}
        onClose={() => dispatch(setDrawerMenuDisplay(false))}
        visible={drawerMenuDisplayed}
        className="menu-drawer"
      >
        <CrawlComposerLinks
          url={url}
          closeDrawer={() => dispatch(setDrawerMenuDisplay(false))}
        />
      </Drawer>
    </>
  );
};

export default CrawlComposer;
