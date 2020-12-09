import React, { useState } from 'react';
import TopBar from '../../../components/Common/TopBar/TopBar';
import LeftSideBar from '../../../components/Common/LeftSideBar/LeftSideBar';
import Footer from '../../../components/Common/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { GeneralStates } from '../../../store/settings/types';
import { AuthState } from '../../../store/auth/types';

const MainLayout: React.FC = (props) => {
  //check for token
  const isAuthenticated: boolean =
    useSelector((state: AuthState) => state.auth.accessToken) != null;
  const { sidebarExpanded } = useSelector(
    (state: GeneralStates) => state.settings
  );

  return (
    <>
      {isAuthenticated ? (
        <div className={!sidebarExpanded ? 'enlarged' : ''}>
          <div className="wrapper">
            <TopBar />
            <LeftSideBar />
            <div className="content-page">
              <div className="content">{props.children}</div>
            </div>
            <Footer footer />
          </div>
        </div>
      ) : (
        props.children
      )}
    </>
  );
};

export default MainLayout;
