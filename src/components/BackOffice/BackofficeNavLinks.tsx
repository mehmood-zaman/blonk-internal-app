import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, PieChartOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

interface Props {
  url: string;
  closeDrawer: () => void;
}
const BackofficeNavLinks: React.FC<Props> = ({ closeDrawer, url }) => {
  console.log('url', url);
  return (
    <>
      <Menu
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {/* <Menu.Item key="sub1" icon={<PieChartOutlined />}>
          <NavLink to={`${url}/jobs`} onClick={closeDrawer}>
            jobs
          </NavLink>
        </Menu.Item> */}
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Companies">
          <Menu.Item key="11">
            <NavLink to={`${url}/companies/add`} onClick={closeDrawer}>
              Add company
            </NavLink>
          </Menu.Item>
          <Menu.Item key="12">
            <NavLink to={`${url}/companies`} onClick={closeDrawer}>
              Company listings
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Recruiters">
          <Menu.Item key="21">
            <NavLink to={`${url}/recruiters/add`} onClick={closeDrawer}>
              Add recruiter
            </NavLink>
          </Menu.Item>
          <Menu.Item key="22">
            <NavLink to={`${url}/recruiters`} onClick={closeDrawer}>
              Recruiter listings
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Jobs">
          <Menu.Item key="31">
            <NavLink to={`${url}/jobs/add`} onClick={closeDrawer}>
              Add job
            </NavLink>
          </Menu.Item>
          <Menu.Item key="32">
            <NavLink to={`${url}/jobs`} onClick={closeDrawer}>
              Job listings
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<AppstoreOutlined />} title="Candidates">
          <Menu.Item key="41">
            <NavLink to={`${url}/candidates/add`} onClick={closeDrawer}>
              Add Candidate
            </NavLink>
          </Menu.Item>
          <Menu.Item key="32">
            <NavLink to={`${url}/candidates`} onClick={closeDrawer}>
              Candidate listings
            </NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default BackofficeNavLinks;
