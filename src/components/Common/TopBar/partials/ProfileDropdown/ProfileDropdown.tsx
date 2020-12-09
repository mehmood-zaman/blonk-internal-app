import React from 'react';
import './ProfileDropdown.scss';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Avatar, Dropdown, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { authLogout } from '../../../../../store/auth/actions';

const ProfileDropdown: React.FC = () => {
  const dispatch = useDispatch();

  const onLogout = () => dispatch(authLogout());
  const menu = (
    <Menu className="profile-dropdown">
      <Menu.Item className="dropdown-item">
        <Link to="/profiles">
          <i className="mdi mdi-account-circle m-r-5"></i> Profile
        </Link>
      </Menu.Item>
      <Menu.Item className="dropdown-item">
        <Link to="/profiles">
          <i className="mdi mdi-settings m-r-5"></i> Reset pssword
        </Link>
      </Menu.Item>
      <Menu.Item className="dropdown-item">
        <span className="text-burgundy pb-3" onClick={onLogout}>
          <i className="mdi mdi-power text-burgundy"></i> Logout
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <span style={{ float: 'right', cursor: 'pointer' }}>
          <Avatar icon={<UserOutlined />} />{' '}
        </span>
      </Dropdown>
    </>
  );
};

export default ProfileDropdown;
