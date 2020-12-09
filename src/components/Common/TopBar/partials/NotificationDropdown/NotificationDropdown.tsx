import React from 'react';
import './NotificationDropdown.scss';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Badge } from 'antd';

const NotificationDropdown: React.FC = () => {
  const menu = (
    <Menu className="notification-dropdown">
      <Menu.Item className=" notify-item">
        <Link to="/notification">
          <div className="notify-icon bg-success">
            <i className="mdi mdi-check"></i>
          </div>
          <p className="notify-details">
            John Doe Liked a candidate
            <span className="text-muted">
              Bella Godfray is liked by John Doe.
            </span>
          </p>
        </Link>
      </Menu.Item>

      <Menu.Item className=" notify-item active">
        <Link to="/notification">
          <div className="notify-icon bg-danger">
            <i className="mdi mdi-close"></i>
          </div>
          <p className="notify-details">
            John Doe Disliked a candidate
            <span className="text-muted">
              Bella Godfray is disliked by John Doe.
            </span>
          </p>
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu}>
        <span style={{ float: 'right', cursor: 'pointer' }}>
          <Badge count={5} className="burgundy">
            <i className="ti-bell noti-icon"></i>
          </Badge>
        </span>
      </Dropdown>
    </>
  );
};

export default NotificationDropdown;
