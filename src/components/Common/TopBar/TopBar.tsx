import React, { useState, useEffect } from 'react';
import Logo from '../../UI/Logo/Logo';
import './TopBar.scss';
import { Link, useLocation } from 'react-router-dom';
import NotificationDropdown from './partials/NotificationDropdown/NotificationDropdown';
import ProfileDropdown from './partials/ProfileDropdown/ProfileDropdown';
import { Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDrawerMenuDisplay,
  setSidbarExpand,
} from '../../../store/settings/actions';
import { GeneralStates } from '../../../store/settings/types';

const TopBar: React.FC = () => {
  const { pathname } = useLocation();

  const { sidebarExpanded } = useSelector(
    (state: GeneralStates) => state.settings
  );

  const dispatch = useDispatch();
  const toggleSidebar = () => dispatch(setSidbarExpand(!sidebarExpanded));

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <Link to="/" className="logo">
            <i>
              <img
                src="https://res.cloudinary.com/blonk-group/image/upload/v1588779863/blonk/logo/b-white.png"
                alt=""
                height="22"
              />
            </i>
          </Link>
        </div>
        <Menu className="navbar-custom" mode="horizontal">
          <Menu.Item className="button-menu-mobile" onClick={toggleSidebar}>
            <i className="mdi mdi-menu"></i>
          </Menu.Item>
          <Menu.Item className="logo">
            <Logo height="25" />
          </Menu.Item>
          <Menu.Item style={{ float: 'right' }}>
            <Button
              className="ant-btn-amber"
              shape="round"
              icon={<MenuOutlined />}
              size="middle"
              onClick={() => dispatch(setDrawerMenuDisplay(true))}
            >
              Action menu
            </Button>
          </Menu.Item>
          <ProfileDropdown />
          <NotificationDropdown />
        </Menu>
      </div>
    </>
  );
};

export default TopBar;
