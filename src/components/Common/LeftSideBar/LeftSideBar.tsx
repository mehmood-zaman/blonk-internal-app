import React, { useState } from 'react';
import './LeftSideBar.scss';
import { NavLink } from 'react-router-dom';
// import './LeftSideBar.scss';

const LeftSideBar: React.FC = () => {
  return (
    <div className="side-menu">
      <ul>
        <li>
          <NavLink to="/" className="ripple" exact>
            <i className="mdi mdi-view-dashboard"></i>
            <span> Dashboard </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/backoffice" className="ripple">
            <i className="mdi mdi mdi-apps"></i>
            <span> Backoffice </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/mobile-marketing" className="ripple">
            <i className="mdi mdi mdi-bullhorn"></i>
            <span> Mobile Marketing App </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/crawl-composer" className="ripple">
            <i className="mdi mdi-account-multiple"></i>
            <span> Crawl Composer </span>
          </NavLink>
        </li>
      </ul>
      <div className="clearfix"></div>
    </div>
  );
};

export default LeftSideBar;
